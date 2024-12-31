"use server";
import { signIn } from "@/app/api/auth/[...nextauth]/options";
export async function signInAction() {
  await signIn("google", {
    redirectTo: "/users/dashboard",
    back: "/sign-in",
  });
}
