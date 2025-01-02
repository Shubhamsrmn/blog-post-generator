import Image from "next/image";
import React from "react";
import icon from "../../../public/icon.jpeg";
function loading() {
  return (
    <div>
      <Image
        src={icon}
        alt="Ai blog generator"
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
  );
}

export default loading;
