import Image from "next/image";
import React from "react";
import icon from "../../../public/icon.jpeg";

const LogoContainer = () => {
  return (
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
  );
};

export default LogoContainer;
