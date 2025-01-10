"use client";
import store from "@/store/store";
import React, { ReactNode } from "react";
type props = {
  children: ReactNode;
};
const MainContainerWrapper: React.FC<props> = ({ children }) => {
  const {
    themeState: { sidebar },
  } = store();
  return (
    <div
      className={`relative ${
        sidebar === 1 ? "w-[calc(100%-25rem)]" : "w-[calc(100%-7rem)]"
      } transition-width duration-300 ease-in-out overflow-x-hidden flex flex-col justify-between ml-auto min-h-screen bg-secbackground text-blackText`}
    >
      {children}
    </div>
  );
};

export default MainContainerWrapper;
