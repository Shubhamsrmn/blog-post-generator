import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const base = "http://localhost:3000";
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
    //@ts-expect-error user type is not known
    async signIn({ user }) {
      try {
        // Create or fetch user using the /api/users endpoint
        const response = await fetch(`${base}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
          }),
        });

        if (!response.ok) {
          console.error("Failed to create or fetch user:", response.statusText);
          return false; // Deny sign-in on error
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Deny sign-in on error
      }
    },
    //@ts-expect-error session type is not known
    async session({ session }) {
      try {
        // Retrieve user data from the /api/users endpoint
        const response = await fetch(
          `${base}/api/users?email=${encodeURIComponent(session.user.email)}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const userData = await response.json();
          session.user.userId = userData._id; // Assume your API returns `_id`
        } else {
          console.error("Failed to fetch user data:", response.statusText);
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
