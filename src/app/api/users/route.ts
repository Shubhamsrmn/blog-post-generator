import { connect } from "@/utils/db/dbconnection";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../utils/db/models/user.model";
export async function POST(req: NextRequest) {
  await connect();
  try {
    const { name, email } = await req.json(); // Use req.json() to parse the body

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error creating or fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connect();
  try {
    const searchParams = req.nextUrl.searchParams;
    const email = searchParams.get("email");
    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
