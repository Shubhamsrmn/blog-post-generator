import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/utils/functions/convertToSubcurrency";
import { base } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { PaymentIntent } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const CheckoutStripe = ({ amount }: { amount: number }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/protected-routes/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred creating your payment.");
      });
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    try {
      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${base}/users/dashboard`,
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        await handleSuccessfulPayment(paymentIntent);
      } else if (paymentIntent && paymentIntent.status === "requires_action") {
        // Handle 3D Secure or other actions if needed.
        // You might not need to do anything here if you have redirect: 'if_required'
      }
    } catch (apiError) {
      console.error("Error during payment:", apiError);
      setErrorMessage("An error occurred processing your payment.");
    } finally {
      setLoading(false);
    }
  };
  const handleSuccessfulPayment = async (paymentIntent: PaymentIntent) => {
    try {
      const response = await fetch("/api/protected-routes/success-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, paymentIntentId: paymentIntent.id }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API call failed: ${response.status} - ${errorText}`);
      }
      toast.success(`Add ${amount} token. Payment successful! 🎉`, {
        onClose: () => {
          router.push(`/users/dashboard`);
        },
      });
    } catch (apiError) {
      console.error("Error calling success API:", apiError);
      setErrorMessage("An error occurred finalizing your payment.");
      router.push(`/users/payment-error?amount=${amount}`);
    }
  };
  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-6 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutStripe;
