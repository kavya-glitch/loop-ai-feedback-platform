import { NextResponse } from "next/server";

import { signupUser } from "@/lib/actions/signup";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 400 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = await signupUser(body);

  if (result.success) {
    return NextResponse.json({ success: true }, { status: 201 });
  }

  if (result.error === "VALIDATION") {
    return NextResponse.json(
      {
        error: "Validation failed",
        fieldErrors: result.fieldErrors,
      },
      { status: 400 },
    );
  }

  if (result.error === "EMAIL_EXISTS") {
    return NextResponse.json(
      { error: result.message },
      { status: 409 },
    );
  }

  return NextResponse.json(
    { error: result.message },
    { status: 500 },
  );
}
