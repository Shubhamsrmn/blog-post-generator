import React from "react";
import RecentBlogItem from "./RecentBlogItem";
import { getRecentBlogPosts } from "@/utils/functions/getRecentBlogPosts";

import CustomLink from "../common/CustomLink";

async function RecentBlogsList() {
  const recentBlogs = await getRecentBlogPosts();
  return (
    <div className="mt-16">
      <p className="mb-4 text-blackText">Recent</p>
      <div className="max-h-[24rem]">
        {recentBlogs.map((blog) => (
          <RecentBlogItem
            key={blog.title}
            title={blog.title}
            blogId={blog._id.toString()}
          />
        ))}
      </div>
      <CustomLink
        url={`/users/blog/all-blogs`}
        title={"View All"}
        linkStyle="w-max ml-auto text-[4rem]"
      />
    </div>
  );
}

export default RecentBlogsList;
