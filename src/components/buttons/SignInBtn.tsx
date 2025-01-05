"use client";
import { signInAction } from "@/utils/actions";
import React from "react";

const SignInBtn = () => {
  return (
    <button
      className="bg-black text-white font-medium py-1 px-8 rounded-full"
      onClick={() => signInAction()}
    >
      Sign In
    </button>
  );
};

export default SignInBtn;
