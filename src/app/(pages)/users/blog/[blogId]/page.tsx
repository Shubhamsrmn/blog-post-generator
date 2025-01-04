import BlogRenderer from "@/components/blog/BlogRenderer";
import { getBlogPost } from "@/utils/functions/getBlogPost";
import React from "react";

async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  const blogPost = await getBlogPost(blogId);
  return (
    <div>
      <BlogRenderer
        title={blogPost.title}
        content={blogPost.content}
        keywords={blogPost.keywords}
        tags={blogPost.tags}
        category={blogPost.categories[0]}
        metaDescription={blogPost.metaDescription}
      />
    </div>
  );
}

export default BlogDetails;
