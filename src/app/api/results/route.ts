import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";
import ResultData from "@/app/models/Result";
import { IResultData } from "@/app/@types/result";

// GET /api/results
export async function GET() {
  await connectToDatabase();

  try {
    const results = await ResultData.find().sort({ createdAt: -1 }).exec();
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 }
    );
  }
}

// POST /api/results
export async function POST(request: Request) {
  await connectToDatabase();

  try {
    const data: IResultData = await request.json();
    const newResult = new ResultData(data);
    await newResult.save();

    // Return the result with the generated ID
    return NextResponse.json(
      {
        message: "Result saved successfully",
        id: newResult._id,
        result: newResult,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}

// DELETE /api/results
export async function DELETE() {
  console.log("DELETE /api/results endpoint hit");
  await connectToDatabase();

  try {
    await ResultData.deleteMany({});
    return NextResponse.json(
      { message: "All results deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete results" },
      { status: 500 }
    );
  }
}
