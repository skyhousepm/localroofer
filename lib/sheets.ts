import { createSign } from "crypto";

/**
 * Append-only Google Sheets logging for leads and partner inquiries.
 *
 * Auth is a Google service account (no googleapis dependency): we sign a
 * JWT with its private key, swap it for an access token, and call the
 * Sheets REST API. The spreadsheet must be shared with the service
 * account's email as an Editor.
 *
 * Env vars — when any are missing, logging is skipped and email remains
 * the only record:
 *   GOOGLE_SHEETS_ID              spreadsheet ID from its URL
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL  client_email from the key file
 *   GOOGLE_PRIVATE_KEY            private_key from the key file (\n escapes OK)
 */

const SHEET_ID = process.env.GOOGLE_SHEETS_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

export const SHEETS_ENABLED = Boolean(SHEET_ID && CLIENT_EMAIL && PRIVATE_KEY);

/* ── Access token (cached per function instance) ───────────────────── */
let cachedToken: { value: string; expiresAt: number } | null = null;

function base64url(input: string | Buffer): string {
  return Buffer.from(input).toString("base64url");
}

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value;

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: CLIENT_EMAIL,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signature = createSign("RSA-SHA256")
    .update(`${header}.${claims}`)
    .sign(PRIVATE_KEY!, "base64url");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claims}.${signature}`,
    }),
  });
  if (!res.ok) throw new Error(`Google auth ${res.status}: ${await res.text()}`);

  const data = (await res.json()) as { access_token: string; expires_in: number };
  // Refresh a minute early so a token never expires mid-request
  cachedToken = { value: data.access_token, expiresAt: Date.now() + (data.expires_in - 60) * 1000 };
  return data.access_token;
}

/* ── Append ────────────────────────────────────────────────────────── */
/**
 * Append one row to the named tab. Values are written RAW, so text like
 * "=HYPERLINK(...)" from a form is stored as plain text, never run as a
 * formula. Returns false when Sheets isn't configured.
 */
export async function appendRow(tab: string, values: string[]): Promise<boolean> {
  if (!SHEETS_ENABLED) return false;

  const token = await getAccessToken();
  const range = encodeURIComponent(`${tab}!A1`);
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}:append` +
      "?valueInputOption=RAW&insertDataOption=INSERT_ROWS",
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [values] }),
    }
  );
  if (!res.ok) throw new Error(`Sheets append ${res.status}: ${await res.text()}`);
  return true;
}

/** "2026-10-31 14:05" in Toronto time — sorts correctly as text. */
export function sheetTimestamp(date = new Date()): string {
  return date
    .toLocaleString("sv-SE", { timeZone: "America/Toronto", hour12: false })
    .slice(0, 16);
}
