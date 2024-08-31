import connectToDatabase from "@/app/lib/mongodb";
import { PasswordManager } from "@/app/lib/passwordmanager";
import User from "@/app/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
console.log("secret key", JWT_SECRET);

export async function POST(request: Request) {
  await connectToDatabase();

  const { name, email, password } = await request.json();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists with this email" },
      { status: 400 }
    );
  }

  const hashedPassword = await PasswordManager.toHash(password);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return NextResponse.json(
    { message: "User registered successfully", token },
    { status: 201 }
  );
}
