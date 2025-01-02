"use client";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  title: string;
  blogId: string;
};
const RecentBlogItem: React.FC<props> = ({ blogId, title }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(title.replaceAll(" ", "-").toLowerCase());
  return (
    <Link
      href={`/users/blog/${blogId}`}
      className={`relative py-2 px-4 flex items-center gap-4 rounded-full mb-4 ${
        isActive
          ? "bg-bluebackground text-blackText"
          : "hover:bg-graylightbackground hover:text-blackText"
      } tooltip-after`}
      data-tooltip={title}
      data-direction="left"
    >
      <FontAwesomeIcon icon={faFileLines} />
      <p className="font-medium line-clamp-1">{title}</p>
    </Link>
  );
};
export default RecentBlogItem;
