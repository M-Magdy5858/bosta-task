import { NextResponse } from "next/server";

let locales = ["en", "ar"];
let defaultLocale = "en";

// Get the preferred locale
function getLocale(request) {
  const locale = request.cookies.get("NEXT_LOCALE");
  if (locale) {
    return locale.value;
  }
  return defaultLocale;
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const searchQuery = request.nextUrl.search;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname == `/${locale}`,
  );
  if (pathnameHasLocale) {
    return;
  }
  // Redirect if there is no locale
  const locale = getLocale(request);
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(
    new URL(`/${locale}/${pathname}${searchQuery}`, request.url),
  );
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
