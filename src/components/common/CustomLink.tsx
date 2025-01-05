import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
type props = {
  url: string;
  title: string;
  icon?: IconDefinition;
  linkStyle?: string;
  isTooltip?: boolean;
  tooltipDirection?: string;
  tooltipText?: string;
};
const CustomLink: React.FC<props> = ({
  url,
  title,
  icon,
  linkStyle,
  isTooltip,
  tooltipDirection,
  tooltipText,
}) => {
  return (
    <Link
      href={url}
      className={`relative py-2 px-4 flex items-center gap-4 rounded-full mb-4 hover:bg-graylightbackground hover:text-blackText ${
        isTooltip ? "tooltip-after" : ""
      } ${linkStyle}`}
      data-tooltip={tooltipText || title}
      data-direction={tooltipDirection}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <p className="font-medium line-clamp-1">{title}</p>
    </Link>
  );
};

export default CustomLink;
