import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Forward the current pathname as a request header so the root layout can
// set the correct document language without relying on a response header.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
