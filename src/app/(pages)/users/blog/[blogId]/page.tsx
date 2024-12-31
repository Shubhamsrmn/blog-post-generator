import React from "react";
type props = {
  params: {
    blogId: string;
  };
};
const BlogDetails: React.FC<props> = ({ params }) => {
  return <div>{params.blogId}</div>;
};

export default BlogDetails;
