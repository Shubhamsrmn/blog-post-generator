import React from "react";
import BlogPDFDocDownloadBtn from "@/components/blog/BlogPdfDocDownloadBtn";
import BlogRenderer from "@/components/blog/BlogRenderer";
import { getBlogPost } from "@/utils/functions/getBlogPost";

async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  const blogPost = await getBlogPost(blogId);
  return (
    <div>
      <BlogPDFDocDownloadBtn
        title={blogPost.title}
        content={blogPost.content}
        keywords={blogPost.keywords}
        tags={blogPost.tags}
        category={blogPost.categories[0]}
        metaDescription={blogPost.metaDescription}
      />
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
