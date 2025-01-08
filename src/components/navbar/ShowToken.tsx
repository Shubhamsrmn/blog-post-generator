import { auth } from "@/app/api/auth/[...nextauth]/options";
import { getUserDataByEmail } from "@/utils/functions/getUserDataByEmail";
import Link from "next/link";
async function ShowToken() {
  const user = await auth();
  if (!user?.user?.email) return null;
  const tokenData = await getUserDataByEmail(user.user.email);

  return (
    <Link
      href="/users/token-topup"
      className="flex items-center gap-2 text-[1.6rem]"
    >
      <span>Token : </span>
      <span className="font-semibold text-green-600">
        {tokenData?.token || 0}
      </span>
    </Link>
  );
}

export default ShowToken;
