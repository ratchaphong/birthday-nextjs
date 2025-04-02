// middleware.ts
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // ✅ ถ้าไม่มี locale และ pathname เป็น root หรือหน้าปกติ เช่น /login
  //    ไม่ต้อง redirect เพราะเราจะใช้ defaultLocale (th) ที่ไม่มี prefix
  if (!hasLocale && pathname === "/") {
    return intlMiddleware(request); // 👈 ให้ next-intl ตัดสินใจใช้ default locale (th)
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
