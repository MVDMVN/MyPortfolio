import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookieName, locales, type Locale } from "@/i18n/config";

const oneYearInSeconds = 60 * 60 * 24 * 365;

// "ru-RU,ru;q=0.9,en;q=0.8" -> first supported language by quality, Ukrainian visitors get Russian
function pickLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const rankedLanguages = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, qualityPart] = entry.trim().split(";q=");
      return { language: tag.slice(0, 2).toLowerCase(), quality: qualityPart ? Number(qualityPart) : 1 };
    })
    .sort((left, right) => right.quality - left.quality);

  for (const { language } of rankedLanguages) {
    if (language === "uk") return "ru";
    if (isLocale(language)) return language;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeInPath = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  // The visitor is already on /en or /ru: remember the choice for the next visit to "/"
  if (localeInPath) {
    const response = NextResponse.next();
    if (request.cookies.get(localeCookieName)?.value !== localeInPath) {
      response.cookies.set(localeCookieName, localeInPath, { maxAge: oneYearInSeconds, path: "/" });
    }
    return response;
  }

  const savedLocale = request.cookies.get(localeCookieName)?.value;
  const targetLocale =
    savedLocale && isLocale(savedLocale)
      ? savedLocale
      : pickLocaleFromHeader(request.headers.get("accept-language"));

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  // Skip Next internals and any file with an extension (cv.pdf, icon.svg)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
