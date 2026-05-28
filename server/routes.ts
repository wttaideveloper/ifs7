import type { Express } from "express";
import { createServer, type Server } from "http";
import { capturePayPalOrder, createPayPalOrder } from "./paypal";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/paypal/create-order", async (req, res) => {
    try {
      const amount = Number(req.body?.amount);
      if (!amount || amount < 1) {
        return res.status(400).json({ message: "Minimum donation amount is $1" });
      }
      const id = await createPayPalOrder(amount);
      res.json({ id });
    } catch (error) {
      console.error("PayPal create-order error:", error);
      res.status(500).json({ message: "Failed to create PayPal order" });
    }
  });

  app.post("/api/paypal/capture-order", async (req, res) => {
    try {
      const orderID = req.body?.orderID as string | undefined;
      if (!orderID) {
        return res.status(400).json({ message: "Order ID is required" });
      }
      const data = await capturePayPalOrder(orderID);
      res.json(data);
    } catch (error) {
      console.error("PayPal capture-order error:", error);
      res.status(500).json({ message: "Failed to capture PayPal payment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
