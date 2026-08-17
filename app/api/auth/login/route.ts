import { NextResponse } from "next/server";
import { createSessionToken, sessionCookieOptions } from "@/lib/auth/session";

export async function POST(request: Request): Promise<Response> {
  let body: { email?: string };
  try {
    body = (await request.json()) as { email?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required" }, {
      status: 400,
    });
  }

  try {
    const token = createSessionToken(email);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(sessionCookieOptions(token));
    return response;
  } catch (error) {
    console.error("[auth/login] Failed to create session:", error);
    const message =
      error instanceof Error ? error.message : "Session creation failed";

    if (message.includes("SESSION_SECRET")) {
      return NextResponse.json(
        {
          error: "server_misconfigured",
          detail: "SESSION_SECRET is not set on the server.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ error: "login_failed" }, { status: 500 });
  }
}
