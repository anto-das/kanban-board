// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { startsWith } from "zod";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("task_orbit_token")?.value;
  const { pathname } = request.nextUrl;

  if (
    token &&
    (pathname === "/login" || pathname === "/register" || pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  // User already logged in
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
