import React from "react";

type props = {
  sidebar: number;
};
const ThemeToggleBtn: React.FC<props> = ({ sidebar }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  return (
    <button
      className={`relative bg-graybackground rounded-full ${
        sidebar === 2 ? "w-40 h-16" : "w-full h-20"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div
        className={`absolute top-2/4 -translate-y-2/4 w-10 h-10 bg-[#fff000] rounded-full ${
          theme === "light"
            ? sidebar === 2
              ? "translate-x-[1rem]"
              : "translate-x-2/4"
            : sidebar === 2
            ? "translate-x-[6.5rem]"
            : "translate-x-2/4"
        } transition-transform duration-500 ease-in-out`}
      >
        {theme === "dark" && (
          <div className="bg-graybackground w-[70%] h-[86%] rounded-full ml-auto"></div>
        )}
      </div>
      {sidebar === 2 && (
        <div
          className={`absolute top-2/4 -translate-y-2/4 capitalize font-semibold ${
            theme === "dark" ? "translate-x-[1rem]" : "translate-x-[5.2rem]"
          } transition-transform duration-500 ease-in-out`}
        >
          {theme}
        </div>
      )}
    </button>
  );
};

export default ThemeToggleBtn;
