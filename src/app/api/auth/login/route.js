import db from "@/lib/db";
import User from "@/models/user";
import { getSecret } from "@/lib/auth";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await db.connect();

    const { email, password } = await req.json();

    const existingUser = await User.findOne({ email: email });

    if (!existingUser || existingUser.password !== password) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const token = await new SignJWT({
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(getSecret());

    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set({ name: "Token", value: token, path: "/" });

    return response;
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
