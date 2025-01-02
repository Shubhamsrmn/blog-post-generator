import { auth } from "@/app/api/auth/[...nextauth]/options";
import blogModel from "@/models/blog.model";
import { connect } from "../dbconnection";

export async function getRecentBlogPost() {
  await connect();
  const user = await auth();
  if (!user?.user?.email) return [];
  return blogModel
    .find({
      userId: user.user.email,
    })
    .sort({ createdAt: -1 })
    .limit(5);
}
