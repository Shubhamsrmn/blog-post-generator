import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain";
function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-24 h-screen">
      <p className="text-[4.2rem] font-semibold text-green-600">
        AI Blog Generator
      </p>
      <FontAwesomeIcon
        icon={faBrain}
        beatFade
        className="text-[24rem]"
        color="#16a34a"
      />

      <p className="text-[2.4rem] font-semibold text-blackText mb-4">
        Loading AI Engine...
      </p>
    </div>
  );
}

export default Loading;
