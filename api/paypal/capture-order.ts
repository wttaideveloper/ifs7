import type { VercelRequest, VercelResponse } from "@vercel/node";
import { capturePayPalOrder } from "../../server/paypal";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const orderID = req.body?.orderID as string | undefined;
    if (!orderID) {
      return res.status(400).json({ message: "Order ID is required" });
    }
    const data = await capturePayPalOrder(orderID);
    return res.status(200).json(data);
  } catch (error) {
    console.error("PayPal capture-order error:", error);
    return res.status(500).json({ message: "Failed to capture PayPal payment" });
  }
}
