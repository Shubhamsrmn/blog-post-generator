import React from "react";
type props = {
  text: string;
};
const TagElement: React.FC<props> = ({ text }) => {
  return (
    <div className="text-[1.4rem] w-max font-medium py-2 px-6 bg-graylightbackground rounded-full">
      {text}
    </div>
  );
};

export default TagElement;
