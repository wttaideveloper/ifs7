import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createPayPalOrder } from "../../server/paypal";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const amount = Number(req.body?.amount);
    if (!amount || amount < 1) {
      return res.status(400).json({ message: "Minimum donation amount is $1" });
    }
    const id = await createPayPalOrder(amount);
    return res.status(200).json({ id });
  } catch (error) {
    console.error("PayPal create-order error:", error);
    return res.status(500).json({ message: "Failed to create PayPal order" });
  }
}
