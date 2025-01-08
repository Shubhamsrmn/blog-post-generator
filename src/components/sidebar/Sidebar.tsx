"use client";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import ThemeToggleBtn from "../buttons/ThemeToggleBtn";
import store from "@/store/store";

import useWindowWidth from "@/utils/hooks/useWindowWidth";

type props = {
  children: React.ReactNode;
};
const Sidebar: React.FC<props> = ({ children }) => {
  const pathname = usePathname();
  const {
    themeState: { sidebar },
    setSidebar,
  } = store();
  const width = useWindowWidth();
  useEffect(() => {
    if ((width <= 600 && sidebar === 1) || (width > 600 && sidebar === 0)) {
      setSidebar(sidebar === 1 ? 0 : 1);
    }
  }, [width]);

  return (
    <div
      className={`bg-background h-screen sticky top-0 px-4 py-8 text-grayText transition-width duration-300 ease-in-out flex flex-col justify-between gap-y-16 ${
        sidebar === 1 ? "w-[25rem]" : sidebar === 0 ? "w-[7rem]" : ""
      } z-10`}
    >
      <div className="space-y-16">
        <button
          className="relative hover:bg-graybackground rounded-full w-20 h-20 tooltip-after"
          data-tooltip="Collapse Menu"
          data-direction="bottom"
          onClick={() => setSidebar(sidebar === 1 ? 0 : 1)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <Link
          href="/users/dashboard"
          className={`relative flex items-center justify-center gap-4 tooltip-after rounded-full ${
            pathname === "/users/dashboard"
              ? "bg-bluebackground"
              : "bg-graybackground"
          } ${sidebar === 1 ? "px-8 py-2 w-max" : "w-20 h-20"}
        `}
          data-tooltip="New Chat"
          data-direction="bottom"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          {sidebar === 1 && <p className="font-medium">New Chat</p>}
        </Link>
        {sidebar === 1 && children}
      </div>
      <ThemeToggleBtn />
    </div>
  );
};

export default Sidebar;
