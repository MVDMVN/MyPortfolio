import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import { MotionProvider } from "@/components/MotionProvider/MotionProvider";
import "@/styles/globals.scss";

// next/font downloads the fonts at build time and serves them from our own domain
const sansFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

// Both language versions are prerendered at build time
export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary();
  const locale = await getLocale();

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    icons: { icon: "/icon.svg" },
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ru: "/ru" },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      locale,
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${sansFont.variable} ${monoFont.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
