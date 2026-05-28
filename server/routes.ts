import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { capturePayPalOrder, createPayPalOrder } from "./paypal";

export async function registerRoutes(app: Express): Promise<Server> {
  const handleCreateOrder = async (req: Request, res: Response) => {
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
  };

  const handleCaptureOrder = async (req: Request, res: Response) => {
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
  };

  app.post("/api/create-order", handleCreateOrder);
  app.post("/api/capture-order", handleCaptureOrder);
  app.post("/api/paypal/create-order", handleCreateOrder);
  app.post("/api/paypal/capture-order", handleCaptureOrder);

  const httpServer = createServer(app);

  return httpServer;
}
