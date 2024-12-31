import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    //@ts-expect-error - This auth object is not typed
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
