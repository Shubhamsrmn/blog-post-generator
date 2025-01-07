"use client";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";

type props = {
  children: React.ReactNode;
};
const Sidebar: React.FC<props> = ({ children }) => {
  const [sidebar, setSidebar] = useState<2 | 1 | 0>(2);
  const pathname = usePathname();
  return (
    <div
      className={`bg-background h-screen sticky top-0 px-4 py-8 text-grayText transition-width duration-300 ease-in-out flex flex-col justify-between gap-y-16 ${
        sidebar === 2 ? "w-[25rem]" : sidebar === 1 ? "w-[7rem]" : ""
      } z-10`}
    >
      <div className="space-y-16">
        <button
          className="relative hover:bg-graybackground rounded-full w-20 h-20 tooltip-after"
          data-tooltip="Collapse Menu"
          data-direction="bottom"
          onClick={() => {
            if (sidebar === 2) setSidebar(1);
            else if (sidebar === 1) setSidebar(2);
            else {
              setSidebar(0);
            }
          }}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <Link
          href="/users/dashboard"
          className={`relative flex items-center justify-center gap-4 tooltip-after rounded-full ${
            pathname === "/users/dashboard"
              ? "bg-bluebackground"
              : "bg-graybackground"
          } ${sidebar === 2 ? "px-8 py-2 w-max" : "w-20 h-20"}
        `}
          data-tooltip="New Chat"
          data-direction="bottom"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          {sidebar === 2 && <p className="font-medium">New Chat</p>}
        </Link>
        {sidebar === 2 && children}
      </div>
      <ThemeToggleBtn sidebar={sidebar} />
    </div>
  );
};

export default Sidebar;
