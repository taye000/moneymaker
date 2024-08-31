import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/app/lib/mongodb";
import User from "@/app/models/User";

const SECRET_KEY = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function GET(request: Request) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { id: string };
    await connectToDatabase();
    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
