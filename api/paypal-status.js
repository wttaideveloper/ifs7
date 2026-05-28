export const config = { runtime: "edge" };

import { getPayPalConfig, getAccessToken } from "./_paypal.js";

export default async function handler() {
  const { mode, clientId, clientSecret } = getPayPalConfig();
  const configured = !!(clientId && clientSecret);

  let authOk = false;
  if (configured) {
    try {
      await getAccessToken();
      authOk = true;
    } catch {
      authOk = false;
    }
  }

  return Response.json({
    mode,
    configured,
    authOk,
    hint: authOk
      ? "PayPal credentials are valid."
      : configured
        ? `Auth failed in ${mode} mode. Set PAYPAL_MODE=live and use Live app credentials from developer.paypal.com.`
        : "Add PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in Vercel env vars.",
  });
}
