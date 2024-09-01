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

// DELETE /api/results/[id] or DELETE /api/results?ids=1,2,3
export async function DELETE(request: Request) {
  console.log(
    "DELETE /api/results/[id] or DELETE /api/results?ids=1,2,3 endpoint hit"
  );
  await connectToDatabase();
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const idsParam = url.searchParams.get("ids");

  try {
    if (id && !idsParam) {
      // Handle single deletion
      const deletedResult = await ResultData.findByIdAndDelete(id).exec();
      if (!deletedResult) {
        return NextResponse.json(
          { error: "Result not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { message: "Result deleted successfully" },
        { status: 200 }
      );
    } else if (idsParam) {
      // Handle multiple deletions
      const ids = idsParam.split(",");
      if (ids.length === 0) {
        return NextResponse.json({ error: "No IDs provided" }, { status: 400 });
      }
      const result = await ResultData.deleteMany({ _id: { $in: ids } }).exec();
      return NextResponse.json(
        { message: `Deleted ${result.deletedCount} results successfully` },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "ID not provided" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete result(s)" },
      { status: 500 }
    );
  }
}
