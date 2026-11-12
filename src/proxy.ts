import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { maintenanceMode } from "@/content/maintenance";

export function proxy(request: NextRequest) {
  if (!maintenanceMode) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname === "/") return NextResponse.next();

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
