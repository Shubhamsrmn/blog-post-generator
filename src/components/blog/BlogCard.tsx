import React from "react";
import TagElement from "./TagElement";
import Link from "next/link";
type props = {
  blogId: string;
  title: string;
  metaDesc: string;
  tags: string[];
};
const BlogCard: React.FC<props> = ({ blogId, title, metaDesc, tags }) => {
  return (
    <Link href={"/users/blog/" + blogId} className="block">
      <div className="border border-gray-300 rounded-lg p-8 space-y-8">
        <h3 className="text-[2.4rem] font-medium">{title}</h3>
        <div className="flex gap-2">
          <h4 className="font-medium">Meta Description : </h4>
          <p className="flex-1 font-normal">{metaDesc}</p>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Tags : </h4>
          <div className="flex-1 flex items-center flex-wrap gap-4">
            {tags.slice(1).map((tag, index) => (
              <TagElement key={index} text={tag} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
