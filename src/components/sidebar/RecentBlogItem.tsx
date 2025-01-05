"use client";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";
import CustomLink from "../common/CustomLink";

type props = {
  title: string;
  blogId: string;
};
const RecentBlogItem: React.FC<props> = ({ blogId, title }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(blogId.toLowerCase());
  return (
    <CustomLink
      url={`/users/blog/${blogId}`}
      title={title}
      icon={faFileLines}
      linkStyle={
        isActive
          ? "bg-bluebackground text-blackText hover:text-blackText hover:bg-bluebackground"
          : ""
      }
      isTooltip
      tooltipDirection="left"
    />
  );
};
export default RecentBlogItem;
