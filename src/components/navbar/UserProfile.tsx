"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SignOutBtn from "../buttons/SignOutBtn";
type props = {
  userImage: string;
  userName: string;
  userEmail: string;
};
const UserProfile: React.FC<props> = ({ userImage, userEmail, userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {userImage && (
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={userImage}
            alt="user image"
            width={36}
            height={36}
            className="border-[3px] border-white rounded-full hover:border-graybackground transition-colors duration-300"
          />
        </button>
      )}

      <div
        className={`absolute top-[110%] right-0 bg-background w-[28rem] rounded-xl text-blackText p-4 ${
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+4rem)]"
        } transition-transform duration-500 ease-in-out shadow-xl border`}
      >
        <p className="font-medium text-[1.4rem] text-center">{userEmail}</p>
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
          <p className="text-[2rem] mt-4">Hi {userName.split(" ")[0]}!</p>
        </div>
        <SignOutBtn />
      </div>
    </div>
  );
};

export default UserProfile;
