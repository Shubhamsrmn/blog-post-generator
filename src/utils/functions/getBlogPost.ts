import blogModel from "@/utils/db/models/blog.model";
import { connect } from "../db/dbconnection";

export async function getBlogPost(blogId: string) {
  await connect();
  if (!blogId) {
    throw new Error("Blog ID is required");
  }
  const blogPost = await blogModel.findOne({ _id: blogId });
  return blogPost;
}
