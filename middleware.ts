import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const pathname = request.nextUrl.pathname;

  // Allow login page and API auth routes
  if (pathname === "/login" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
