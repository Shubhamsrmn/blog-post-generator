import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
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
      <MarkdownRenderer markdown={blogPost.markdown} />
    </div>
  );
}

export default BlogDetails;
