import React from "react";
import RecentBlogItem from "./RecentBlogItem";
import { getRecentBlogPost } from "@/utils/functions/getRecentBlogPost";

async function RecentBlogsList() {
  const recentBlogs = await getRecentBlogPost();
  return (
    <div className="mt-16">
      <p className="mb-4 text-blackText">Recent</p>
      <div className="h-[24rem]">
        {recentBlogs.map((blog) => (
          <RecentBlogItem
            key={blog.title}
            title={blog.title}
            blogId={blog._id.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentBlogsList;
