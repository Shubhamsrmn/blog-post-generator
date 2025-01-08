"use client";
import React, { useState } from "react";
import StripeTokenBuy from "@/components/token-topup/StripeTokenBuy";

const TokenTopUp = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]+(\.[0-9]{1,2})?$/.test(value)) {
      setAmount(value);
      setError("");
    } else {
      setError("Please enter a valid amount.");
    }
  };

  const handleSubmit = () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }
    setIsPaymentInitiated(true); // Proceed to initiate payment flow
  };

  return (
    <div className="p-6">
      <h2 className="text-[2.8rem] font-medium text-center">
        Top Up Tokens for Blog Creation
      </h2>
      <p className="my-4">
        You can use these tokens to generate AI-powered blog content. Simply top
        up your account with tokens, and you can generate as many posts as you
        need. If you run out of tokens, just add more to continue generating
        blog content.
      </p>
      <div className="mb-6">
        <label htmlFor="amount">Enter Amount (in USD)</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          className={`bg-secbackground w-full py-2 px-4 mt-2 border ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-600"
          } rounded-lg outline-none focus:ring-1`}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <button
        onClick={handleSubmit}
        className={`w-80 font-medium bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors`}
      >
        Proceed with Payment
      </button>
      {isPaymentInitiated && amount && parseFloat(amount) > 0 && (
        <div className="mt-4">
          <StripeTokenBuy amount={parseFloat(amount)} />
        </div>
      )}
    </div>
  );
};

export default TokenTopUp;
