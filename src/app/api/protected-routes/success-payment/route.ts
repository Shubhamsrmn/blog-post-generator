import UserModel from "@/utils/db/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/options";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();
    const session = await auth();
    //@ts-expect-error userId is not defined
    const userId = session?.user?.userId;
    const user = await UserModel.findById(userId);
    user.token = parseInt(user.token) + parseInt(amount);
    await user.save();
    revalidateTag(`user-token-${user.email}`);
    return NextResponse.json({
      amount: amount,
      message: "Payment successful",
    });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
