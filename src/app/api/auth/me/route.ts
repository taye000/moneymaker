import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/app/lib/mongodb";
import User from "@/app/models/User";

const SECRET_KEY = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function GET(request: Request) {
  // Retrieve and parse the token from the Authorization header
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized: No token provided" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };

    await connectToDatabase();

    const user = await User.findById(decoded.userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error verifying token or retrieving user:", error);
    return NextResponse.json(
      { message: "Invalid token or server error" },
      { status: 401 }
    );
  }
}
