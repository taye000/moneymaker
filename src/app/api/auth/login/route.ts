import connectToDatabase from "@/app/lib/mongodb";
import { PasswordManager } from "@/app/lib/passwordmanager";
import User from "@/app/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
console.log("secret key", JWT_SECRET);

export async function POST(request: Request) {
  await connectToDatabase();

  const { email, password } = await request.json();

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const isMatch = await PasswordManager.compare(user.password, password);

  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  return NextResponse.json(
    { message: "Login successful", token },
    { status: 200 }
  );
}
