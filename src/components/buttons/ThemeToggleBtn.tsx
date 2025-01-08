import store from "@/store/store";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ThemeToggleBtn = () => {
  const {
    themeState: { theme },
    toggleTheme,
  } = store();
  return (
    <button
      className={`bg-graybackground rounded-full w-20 h-20 overflow-hidden relative`}
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        icon={faSun}
        size="xl"
        className={`text-yellow-400 absolute top-2/4 -translate-x-2/4 left-2/4 ${
          theme === "light" ? "-translate-y-2/4" : "translate-y-20"
        } transition-transform duration-500 ease-in-out`}
      />
      <FontAwesomeIcon
        icon={faMoon}
        size="xl"
        className={`text-white absolute top-2/4 -translate-x-2/4 left-2/4 ${
          theme !== "light" ? "-translate-y-2/4" : "translate-y-20"
        } transition-transform duration-500 ease-in-out`}
      />
    </button>
  );
};

export default ThemeToggleBtn;
