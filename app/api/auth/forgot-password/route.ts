import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const body = await request.json();
      console.log("Forgot password request received for:", body.email);
    }
  } catch (error) {
    // Fail silently or log error
    console.error("Error reading forgot-password request body:", error);
  }

  // Always return success to prevent user enumeration
  return NextResponse.json({ success: true }, { status: 200 });
}
