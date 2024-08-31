import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  //TODO: Add your middleware logic here (e.g., auth checks)
  return NextResponse.next();
}
