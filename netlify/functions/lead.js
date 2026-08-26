const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function ghlHeaders(apiKey) {
  return {
    Authorization: `Bearer ${apiKey}`,
    Version: GHL_VERSION,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

function envValue(...keys) {
  for (const key of keys) {
    const value = String(process.env[key] || "")
      .trim()
      .replace(/^['"]|['"]$/g, "");
    if (value) return value;
  }
  return "";
}

function splitName(fullName) {
  const parts = String(fullName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return { name: "", firstName: "", lastName: "" };
  if (parts.length === 1) return { name: parts[0], firstName: parts[0], lastName: "" };
  return {
    name: parts.join(" "),
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return digits ? `+${digits}` : "";
}

function isConsented(value) {
  return value === true || value === "true" || value === "on" || value === "1";
}

function compact(payload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => {
      if (value == null) return false;
      if (typeof value === "string" && !value.trim()) return false;
      if (Array.isArray(value) && !value.length) return false;
      return true;
    })
  );
}

function ghlMessage(data) {
  return (
    data.message ||
    data.error ||
    data.msg ||
    (Array.isArray(data.errors) ? data.errors.map((item) => item.message || item).join("; ") : "") ||
    ""
  );
}

async function ghlFetch(path, apiKey, options = {}) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...options,
    headers: {
      ...ghlHeaders(apiKey),
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text.slice(0, 300) };
  }
  const failedBody = data.succeded === false || data.succeeded === false;
  return {
    ok: res.ok && !failedBody,
    status: res.status,
    data,
    message: ghlMessage(data),
  };
}

async function getLocationId(apiKey) {
  const fromEnv = envValue("GHL_LOCATION_ID", "GHL_Location_ID");
  if (fromEnv) return fromEnv;

  const searched = await ghlFetch("/locations/search?limit=20", apiKey);
  const locations = searched.data.locations || searched.data.location || [];
  const list = Array.isArray(locations) ? locations : [locations];
  const first = list.find((item) => item && item.id);
  if (first) return first.id;

  throw new Error("GoHighLevel location ID is missing.");
}

function contactIdFrom(payload) {
  return (
    payload.contact?.id ||
    payload.contactId ||
    payload.id ||
    payload.data?.contact?.id ||
    ""
  );
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, body: "" };
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  const apiKey = envValue("GHL_API_KEY", "GHL_API_Token");
  if (!apiKey) return json(500, { error: "Form delivery is not configured yet." });

  let fields = {};
  try {
    fields = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid form data." });
  }

  if (String(fields.crm_hp || fields.company_website || "").trim()) {
    return json(200, { ok: true });
  }

  const email = String(fields.email || "").trim();
  const phone = normalizePhone(fields.phone);
  const names = splitName(fields.name);
  const address = String(fields.address || "").trim();
  const service = String(fields.service || "").trim();
  const message = String(fields.message || "").trim();
  const formSource = String(fields.source || "website").trim();
  const smsFieldsPresent =
    Object.prototype.hasOwnProperty.call(fields, "smsTransactionalConsent") ||
    Object.prototype.hasOwnProperty.call(fields, "smsMarketingConsent");
  const smsTransactional = isConsented(fields.smsTransactionalConsent);
  const smsMarketing = isConsented(fields.smsMarketingConsent);

  if (!email && !phone) {
    return json(400, { error: "Please include a phone number or email." });
  }

  try {
    const locationId = await getLocationId(apiKey);
    const payload = compact({
      locationId,
      name: names.name,
      firstName: names.firstName,
      lastName: names.lastName,
      email,
      phone,
      address1: address,
      country: "US",
      source: "Capital Water Co. Website",
      tags: ["Website Lead", formSource === "hero" ? "Hero Form" : "Contact Form"]
        .concat(service ? [service] : [])
        .concat(smsFieldsPresent && smsTransactional ? ["SMS Transactional Consent"] : [])
        .concat(smsFieldsPresent && smsMarketing ? ["SMS Marketing Consent"] : []),
    });

    let saved = await ghlFetch("/contacts/upsert", apiKey, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!saved.ok) {
      console.error("GHL upsert failed", saved.status, saved.message);
      saved = await ghlFetch("/contacts/", apiKey, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    }

    if (!saved.ok) {
      console.error("GHL create failed", saved.status, saved.message);
      return json(502, {
        error: "We could not send your request. Please call us or try again.",
        ghlStatus: saved.status,
        ghlMessage: saved.message,
      });
    }

    const id = contactIdFrom(saved.data);
    const noteLines = [
      service && `Service: ${service}`,
      address && `Address: ${address}`,
      message && `Message: ${message}`,
      `Form: ${formSource}`,
      smsFieldsPresent && `SMS transactional consent: ${smsTransactional ? "Yes" : "No"}`,
      smsFieldsPresent && `SMS marketing consent: ${smsMarketing ? "Yes" : "No"}`,
    ].filter(Boolean);

    if (id && noteLines.length) {
      const note = await ghlFetch(`/contacts/${id}/notes`, apiKey, {
        method: "POST",
        body: JSON.stringify({ body: noteLines.join("\n") }),
      });
      if (!note.ok) console.error("GHL note failed", note.status, note.message);
    }

    return json(200, { ok: true, contactId: id || null });
  } catch (error) {
    console.error("Lead function error", error.message);
    return json(500, { error: "We could not send your request. Please call us or try again." });
  }
};
