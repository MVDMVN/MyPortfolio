import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";
import type englishDictionary from "./dictionaries/en.json";

export type Dictionary = typeof englishDictionary;

// The Record type makes TypeScript check that ru.json has exactly the same shape as en.json
const dictionaryLoaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
};

// Reads the locale from the root segment app/[lang] without prop drilling.
// Works only in Server Components, so dictionaries never reach the client bundle.
export async function getLocale(): Promise<Locale> {
  const currentLang = await lang();
  if (!isLocale(currentLang)) notFound();
  return currentLang;
}

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getLocale();
  return dictionaryLoaders[locale]();
}
