export const config = { runtime: "edge" };

import { getAccessToken } from "./_paypal.js";

async function capturePayPalOrder(orderID) {
  const { accessToken, apiBase } = await getAccessToken();
  const response = await fetch(
    `${apiBase}/v2/checkout/orders/${orderID}/capture`,
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
