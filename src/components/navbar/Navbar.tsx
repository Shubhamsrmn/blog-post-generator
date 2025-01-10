import React from "react";
import UserProfile from "./UserProfile";
import ShowToken from "./ShowToken";
import { auth } from "@/app/api/auth/[...nextauth]/options";
import LogoContainer from "./LogoContainer";
async function Navbar() {
  const user = await auth();
  const userImage = user?.user?.image || "";
  const userName = user?.user?.name || "";
  const userEmail = user?.user?.email || "";
  return (
    <div className="bg-secbackground py-4 px-12 w-full sticky top-0 left-0 flex justify-between items-center z-10">
      <LogoContainer />
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
