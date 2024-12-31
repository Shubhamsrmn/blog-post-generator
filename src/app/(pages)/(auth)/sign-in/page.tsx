import React from "react";
import { signInAction } from "@/utils/actions";
const SignIn = () => {
  return (
    <div>
      SignIn with google
      <form action={signInAction}>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
