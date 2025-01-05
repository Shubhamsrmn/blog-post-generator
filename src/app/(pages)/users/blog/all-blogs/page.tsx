import BlogCard from "@/components/blog/BlogCard";
import PaginationButtons from "@/components/common/PaginationButtons";
import { getAllBlogPosts } from "@/utils/functions/getAllBlogPosts";
import React from "react";

type Props = {
  searchParams: Promise<{ page?: string; limit?: string }>;
};

async function AllBlogs({ searchParams }: Props) {
  const searchParamsObj = await searchParams;
  const page = parseInt(searchParamsObj.page || "1", 10); // Default to page 1 if not provided
  const pageSize = parseInt(searchParamsObj.limit || "5", 10); // Default page size to 5
  const allBlogs = await getAllBlogPosts(page, pageSize);
  const totalBlogs = allBlogs.totalCount;
  const totalPages = Math.ceil(totalBlogs / pageSize);
  return (
    <div className="space-y-12 my-4">
      {allBlogs.posts.map((curr) => (
        <BlogCard
          key={curr._id.toString()}
          title={curr.title}
          metaDesc={curr.metaDescription}
          tags={curr.tags}
          blogId={curr._id.toString()}
        />
      ))}

      <PaginationButtons
        page={page}
        totalPages={totalPages}
        pageSize={pageSize}
        link="/users/blog/all-blogs"
      />
    </div>
  );
}

export default AllBlogs;
