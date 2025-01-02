"use client";
import { signInAction } from "@/utils/actions";
import React from "react";

const SignInBtn = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signInAction()}
    >
      Sign In with Google
    </button>
  );
};

export default SignInBtn;
