import blogModel from "@/models/blog.model";
import { connect } from "../dbconnection";

export async function getBlogPost(blogId: string) {
  await connect();
  if (!blogId) {
    throw new Error("Blog ID is required");
  }
  const blogPost = await blogModel.findOne({ _id: blogId });
  return blogPost;
}
