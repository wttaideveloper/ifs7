export function getPayPalConfig() {
  const mode = process.env.PAYPAL_MODE?.trim() === "live" ? "live" : "sandbox";
  const clientId = process.env.PAYPAL_CLIENT_ID?.trim();
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET?.trim();
  const apiBase =
    mode === "live"
      ? "https://api-m.paypal.com"
      : "https://api-m.sandbox.paypal.com";

  return { mode, clientId, clientSecret, apiBase };
}

export async function getAccessToken() {
  const { mode, clientId, clientSecret, apiBase } = getPayPalConfig();

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials are not configured");
  }

  const auth = btoa(`${clientId}:${clientSecret}`);
  const response = await fetch(`${apiBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("PayPal auth failed:", detail);
    throw new Error(
      `PayPal authentication failed (${mode} mode). Check PAYPAL_MODE and credentials in Vercel.`,
    );
  }

  const data = await response.json();
  return { accessToken: data.access_token, apiBase };
}
