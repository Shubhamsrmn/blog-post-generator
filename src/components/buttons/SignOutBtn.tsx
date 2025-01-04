"use client";
import { signOutAction } from "@/utils/actions";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SignOutBtn = () => {
  return (
    <button
      onClick={() => signOutAction()}
      className="w-full flex items-center gap-2"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <p>Sign Out</p>
    </button>
  );
};

export default SignOutBtn;
