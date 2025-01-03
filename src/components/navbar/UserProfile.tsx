import { auth } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import React from "react";
import SignOutBtn from "../buttons/SignOutBtn";

async function UserProfile() {
  const user = await auth();
  const userImage = user?.user?.image;
  return (
    <div className="relative cursor-pointer group">
      {userImage && (
        <Image
          src={userImage}
          alt="user image"
          width={36}
          height={36}
          className="border-2 border-white rounded-full hover:border-graybackground"
        />
      )}
      <div className="bg-background w-[24rem] h-max absolute top-[108%] -right-8 rounded-xl text-blackText p-4 hidden group-hover:block">
        <p className="font-medium text-[1.4rem]">{user?.user?.email}</p>
        <div className="text-center my-6">
          {userImage && (
            <Image
              src={userImage.replace("s96-c", "s200-c")}
              alt="user image"
              width={96}
              height={96}
              className="rounded-full mx-auto"
            />
          )}
          <p className="text-[2rem] mt-4">
            Hi {user?.user?.name?.split(" ")[0]}!
          </p>
        </div>
        <SignOutBtn />
      </div>
    </div>
  );
}

export default UserProfile;
