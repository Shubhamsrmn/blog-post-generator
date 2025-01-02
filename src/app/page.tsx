import { redirect } from "next/navigation";
import { auth } from "./api/auth/[...nextauth]/options";
import SignInBtn from "@/components/buttons/SignInBtn";

export default async function Home() {
  const user = await auth();
  if (user) return redirect("/users/dashboard");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Get Started
      <SignInBtn />
    </div>
  );
}
