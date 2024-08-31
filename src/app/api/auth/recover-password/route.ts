import connectToDatabase from "@/app/lib/mongodb";
import { generateRandomCode } from "@/app/lib/randomCodeGenerator";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectToDatabase();

  const { email } = await request.json();
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "Email not found" }, { status: 404 });
  }

  // Generate a random recovery code
  const recoveryCode = generateRandomCode();
  user.recoveryCode = recoveryCode;
  user.recoveryCodeExpiry = Date.now() + 3600000; // 1 hour
  await user.save();

  const recoveryUrl = `${process.env.BASE_URL}/auth/reset-password`;

  //TODO: Send the recovery email
//   await transporter.sendMail({
//     to: email,
//     from: process.env.EMAIL_USER,
//     subject: "Password Recovery Code",
//     html: `
//       <p>You requested a password recovery code.</p>
//       <p>Your code is: <strong>${recoveryCode}</strong></p>
//       <p>Enter this code on the password reset page to reset your password.</p>
//       <p>This code will expire in 1 hour.</p>
//     `,
//   });

  return NextResponse.json({ message: "Recovery code sent to your email" });
}
