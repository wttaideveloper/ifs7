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

async function createPayPalOrder(amount) {
  const accessToken = await getAccessToken();
  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount.toFixed(2),
          },
          description: "IBLU Donation",
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error("PayPal create order failed:", await response.text());
    throw new Error("Failed to create PayPal order");
  }

  const order = await response.json();
  return order.id;
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const amount = Number(body?.amount);

    if (!amount || amount < 1) {
      return Response.json(
        { message: "Minimum donation amount is $1" },
        { status: 400 },
      );
    }

    const id = await createPayPalOrder(amount);
    return Response.json({ id });
  } catch (error) {
    console.error("PayPal create-order error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to create PayPal order";
    const status = message.includes("not configured") ? 503 : 500;
    return Response.json({ message }, { status });
  }
}
