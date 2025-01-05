"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/utils/functions/convertToSubcurrency";
import CheckoutStripe from "./CheckoutStripe";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);
const StripeTokenBuy = () => {
  const amount = 10;
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutStripe amount={amount} />
      </Elements>
    </div>
  );
};

export default StripeTokenBuy;
