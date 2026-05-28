export const config = { runtime: "edge" };

const PAYPAL_API_BASE =
  process.env.PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials are not configured");
  }

  const auth = btoa(`${clientId}:${clientSecret}`);
  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    console.error("PayPal auth failed:", await response.text());
    throw new Error("PayPal authentication failed");
  }

  const data = await response.json();
  return data.access_token;
}

async function capturePayPalOrder(orderID) {
  const accessToken = await getAccessToken();
  const response = await fetch(
    `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    console.error("PayPal capture failed:", await response.text());
    throw new Error("Failed to capture PayPal payment");
  }

  return response.json();
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const orderID = body?.orderID;

    if (!orderID) {
      return Response.json({ message: "Order ID is required" }, { status: 400 });
    }

    const data = await capturePayPalOrder(orderID);
    return Response.json(data);
  } catch (error) {
    console.error("PayPal capture-order error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to capture PayPal payment";
    const status = message.includes("not configured") ? 503 : 500;
    return Response.json({ message }, { status });
  }
}
