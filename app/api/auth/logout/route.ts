import { NextResponse } from "next/server";
import { clearedSessionCookieOptions } from "@/lib/auth/session";

export async function POST(): Promise<Response> {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(clearedSessionCookieOptions());
  return response;
}
