import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";
import ResultData from "@/app/models/Result";

// GET /api/results/[id]
export async function GET(request: Request) {
  await connectToDatabase();

  const id = request.url.split("/").pop(); // Extract ID from URL

  try {
    const result = await ResultData.findById(id).exec();
    if (!result) {
      return NextResponse.json({ error: "Result not found" }, { status: 404 });
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch result" },
      { status: 500 }
    );
  }
}

// PATCH /api/results/[id]
export async function PATCH(request: Request) {
  await connectToDatabase();

  const id = request.url.split("/").pop(); // Extract ID from URL
  const data = await request.json();

  try {
    const updatedResult = await ResultData.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    if (!updatedResult) {
      return NextResponse.json({ error: "Result not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Result updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update result" },
      { status: 500 }
    );
  }
}

// DELETE /api/results/[id]
export async function DELETE(request: Request) {
  await connectToDatabase();

  const id = request.url.split("/").pop(); // Extract ID from URL

  try {
    const deletedResult = await ResultData.findByIdAndDelete(id).exec();
    if (!deletedResult) {
      return NextResponse.json({ error: "Result not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Result deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete result" },
      { status: 500 }
    );
  }
}
