import blogModel from "@/utils/db/models/blog.model";
import { connect } from "../db/dbconnection";
import { auth } from "@/app/api/auth/[...nextauth]/options";

export async function getAllBlogPosts(page: number, limit: number) {
  try {
    // Ensure database connection
    await connect();

    // Authenticate user
    const session = await auth();
    if (!session || !session.user?.email) {
      return { posts: [], totalCount: 0 }; // Return empty result if not authenticated
    }

    // Fetch paginated blog posts
    const skip = (page - 1) * limit;
    const userBlogs = await blogModel
      //@ts-expect-error userId is added
      .find({ user: session.user.userId })
      .skip(skip)
      .limit(limit);

    // Total count of blogs for the user
    const totalCount = await blogModel
      //@ts-expect-error userId is added
      .countDocuments({ user: session.user.userId });

    return { posts: userBlogs, totalCount };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { posts: [], totalCount: 0 }; // Return empty result on error
  }
}
