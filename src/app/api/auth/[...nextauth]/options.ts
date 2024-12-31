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
    authorized({ auth }) {
      console.log("authorized", auth);

      return !!auth?.user;
    },
  },
};
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
