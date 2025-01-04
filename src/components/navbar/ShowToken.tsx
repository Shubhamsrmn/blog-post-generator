import { auth } from "@/app/api/auth/[...nextauth]/options";
import UserModel from "@/models/user.model";
import Link from "next/link";
import React from "react";

async function ShowToken() {
  const user = await auth();
  console.log(user);

  const getToken = await UserModel.findOne({ email: user?.user?.email });

  return (
    <Link
      href="/users/token-topup"
      className="flex items-center gap-2 text-[1.6rem]"
    >
      <span>Token : </span>
      <span className="font-semibold text-green-600">
        {getToken?.token || 0}
      </span>
    </Link>
  );
}

export default ShowToken;
