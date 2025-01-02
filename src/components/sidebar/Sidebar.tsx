"use client";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import icon from "../../../public/icon.jpeg";
type props = {
  children: React.ReactNode;
};
const Sidebar: React.FC<props> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="w-[25rem] bg-background h-screen sticky top-0 px-4 py-8 text-grayText">
      <div className="flex justify-between mb-16">
        <Image
          src={icon}
          alt="Ai blog generator"
          width={120}
          height={120}
          className="w-20 h-20 rounded-full"
        />
        <button
          className="relative hover:bg-graybackground rounded-full w-20 h-20 tooltip-after"
          data-tooltip="Collapse Menu"
          data-direction="bottom"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      <Link
        href="/users/dashboard"
        className={`relative flex items-center gap-4 px-8 py-2 w-max rounded-full tooltip-after ${
          pathname === "/users/dashboard"
            ? "bg-bluebackground"
            : "bg-graybackground"
        }`}
        data-tooltip="New Chat"
        data-direction="bottom"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
        <p className="font-medium">New Chat</p>
      </Link>
      {children}
    </div>
  );
};

export default Sidebar;
