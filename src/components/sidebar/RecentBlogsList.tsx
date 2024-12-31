import React from "react";
import RecentBlogItem from "./RecentBlogItem";

const RecentBlogsList = () => {
  return (
    <div className="mt-16">
      <p className="mb-4 text-blackText">Recent</p>
      <div className="h-[24rem]">
        <RecentBlogItem title="Type Safe NextAuth" />
        <RecentBlogItem title="How Ai works" />
        <RecentBlogItem title="Blog creation with cloundary" />
      </div>
    </div>
  );
};

export default RecentBlogsList;
