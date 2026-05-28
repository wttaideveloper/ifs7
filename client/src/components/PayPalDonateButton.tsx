import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useToast } from "@/hooks/use-toast";

type PayPalDonateButtonProps = {
  amount: number;
  paymentKey?: string;
  successTitle?: string;
  successDescription?: string;
};

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined;

export default function PayPalDonateButton({
  amount,
  paymentKey,
  successTitle = "Thank you for your donation!",
  successDescription,
}: PayPalDonateButtonProps) {
  const { toast } = useToast();

  if (!clientId) {
    return (
      <p className="text-sm text-red-600">
        PayPal is not configured. Add VITE_PAYPAL_CLIENT_ID to your .env file.
      </p>
    );
  }

  if (amount < 1) {
    return (
      <p className="text-sm text-gray-500">Enter at least $1 to enable PayPal checkout.</p>
    );
  }

  return (
    <PayPalScriptProvider
      key={paymentKey ?? String(amount)}
      options={{
        clientId,
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        key={paymentKey ?? String(amount)}
        style={{ layout: "vertical", color: "gold", shape: "rect", label: "donate" }}
        disabled={amount < 1}
        createOrder={async () => {
          const response = await fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
          });

          if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || "Could not start PayPal checkout");
          }

          const data = await response.json();
          return data.id;
        }}
        onApprove={async (data) => {
          const response = await fetch("/api/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });

          if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || "Payment capture failed");
          }

          toast({
            title: successTitle,
            description:
              successDescription ??
              `Your payment of $${amount.toFixed(2)} was received successfully.`,
          });
        }}
        onError={(err) => {
          console.error("PayPal error:", err);
          toast({
            title: "Payment failed",
            description:
              err instanceof Error
                ? err.message
                : "Something went wrong with PayPal. Please try again.",
            variant: "destructive",
          });
        }}
        onCancel={() => {
          toast({
            title: "Payment cancelled",
            description: "You can try again whenever you're ready.",
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
