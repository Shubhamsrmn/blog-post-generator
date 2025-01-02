import BlogRenderer from "@/components/blog/BlogRenderer";
import { getBlogPost } from "@/utils/functions/getBlogPost";

import React from "react";
type props = {
  params: {
    blogId: string;
  };
};
async function BlogDetails({ params }: props) {
  const blogPost = await getBlogPost(params.blogId);
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
