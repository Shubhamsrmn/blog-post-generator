import { createUser } from "@/utils/functions/createUserFun";
import { getUserDataByEmail } from "@/utils/functions/getUserDataByEmail";
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
    maxAge: 24 * 60 * 60, // 1 day in seconds
  },
  callbacks: {
    //@ts-expect-error auth is not defined
    authorized({ auth }) {
      return !!auth?.user;
    },
    //@ts-expect-error user is not defined
    async signIn({ user }) {
      const createdUser = await createUser({
        name: user.name!,
        email: user.email!,
      });

      // Return false if user creation or fetching fails
      if (!createdUser) {
        return false;
      }

      return true; // Allow sign-in if user creation/fetching succeeds
    },

    //@ts-expect-error session is not defined
    async session({ session }) {
      if (!session.user.email) return session; // If no email, return session

      const userData = await getUserDataByEmail(session.user.email);
      if (userData) {
        session.user.userId = userData._id; // Attach user ID from fetched data
      }

      return session;
    },
  },

  pages: {
    signIn: "/", // Custom sign-in page
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
