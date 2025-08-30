import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "./src/i18n/locales";

export const config = {
  matcher: ["/((?!_next|.*\..*).*)"],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  // Redirect "/" to default locale
  if (segments.length === 0) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  const maybeLocale = segments[0];
  if (!isLocale(maybeLocale)) {
    // If no locale segment, prefix it
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Continue
  return NextResponse.next();
}

