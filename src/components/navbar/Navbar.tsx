import React from "react";
import UserProfile from "./UserProfile";
import ShowToken from "./ShowToken";
import Image from "next/image";
import icon from "../../../public/icon.jpeg";
import { auth } from "@/app/api/auth/[...nextauth]/options";
async function Navbar() {
  const user = await auth();
  const userImage = user?.user?.image || "";
  const userName = user?.user?.name || "";
  const userEmail = user?.user?.email || "";
  return (
    <div className="bg-white py-4 px-12 w-full sticky top-0 flex justify-between items-center">
      <div className="flex items-center gap-4 text-green-600">
        <Image
          src={icon}
          alt="Ai blog generator"
          width={120}
          height={120}
          className={`w-12 h-12 rounded-full`}
        />
        <h1 className="text-[2rem] font-semibold">AI Blog Generator</h1>
      </div>
      <div className="flex items-center gap-8">
        <ShowToken />
        <UserProfile
          userImage={userImage}
          userName={userName}
          userEmail={userEmail}
        />
      </div>
    </div>
  );
}

export default Navbar;
