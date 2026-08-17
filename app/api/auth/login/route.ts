import { NextResponse } from "next/server";
import { createSessionToken, sessionCookieOptions } from "@/lib/auth/session";

export async function POST(request: Request): Promise<Response> {
  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required" }, {
      status: 400,
    });
  }

  const token = createSessionToken(email);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookieOptions(token));
  return response;
}
