import { auth } from "@/app/api/auth/[...nextauth]/options";
import blogModel from "@/models/blog.model";
import { connect } from "../dbconnection";

export async function getRecentBlogPost() {
  try {
    // Ensure database connection
    await connect();

    // Authenticate user
    const session = await auth();
    if (!session || !session.user?.email) {
      return []; // Return empty array if user is not authenticated
    }

    // Fetch recent blog posts for the authenticated user
    const recentBlogs = await blogModel
      //@ts-expect-error userId is added
      .find({ user: session.user.userId }) // Query by user ObjectId
      .sort({ createdAt: -1 })
      .limit(5);

    return recentBlogs;
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    return []; // Return empty array on error
  }
}
