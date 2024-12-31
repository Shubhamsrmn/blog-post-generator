import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UserProfile from "./UserProfile";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-12 w-full sticky top-0 flex justify-between items-center">
      <div className="flex items-center gap-2 text-green-600">
        <FontAwesomeIcon icon={faBrain} />
        <h1 className="text-[1.8rem] font-semibold">AI Blog Generator</h1>
      </div>
      <div className="flex items-center gap-8">
        <Link
          href="/users/token-topup"
          className="flex items-center gap-2 text-[1.5rem]"
        >
          <span>Token : </span>
          <span className="font-semibold text-green-600">23</span>
        </Link>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
