import UserModel from "@/models/user.model";
import { connect } from "@/utils/dbconnection";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
    }),
  ],
  session: {
    // Set the session expiration time to 1 day
    maxAge: 24 * 60 * 60, // 1 day in seconds
  },
  callbacks: {
    //@ts-expect-error user is not used
    async signIn({ user }) {
      try {
        // Ensure database connection
        await connect();

        // Check if the user exists in the database
        const existingUser = await UserModel.findOne({ email: user.email });
        if (!existingUser) {
          await UserModel.create({
            name: user.name,
            email: user.email,
          });
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Deny sign-in on error
      }
    },
    //@ts-expect-error token is not used
    async session({ session }) {
      try {
        // Ensure database connection
        await connect();

        // Retrieve the user from the database
        const existingUser = await UserModel.findOne({
          email: session.user.email,
        });

        if (existingUser) {
          session.user.userId = existingUser._id.toString(); // Convert ObjectId to string
        }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // Return session even if an error occurs
      }
    },
  },

  pages: {
    signIn: "/",
  },
};
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
