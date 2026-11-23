export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Cookie set by the proxy, so a visitor who picked a language keeps it on the next visit
export const localeCookieName = "preferredLocale";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
