import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  locales,
  defaultLocale: "es"
});

export const config = {
  matcher: ['/',
    '/(es|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
    '/((?!api|_next|.*\\..*).*)']
};