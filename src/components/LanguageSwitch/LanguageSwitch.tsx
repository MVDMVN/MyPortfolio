"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { locales, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitch.module.scss";

type LanguageSwitchProps = {
  currentLocale: Locale;
  label: string;
};

// Matches the knob transition in LanguageSwitch.module.scss
const knobSlideDurationMs = 250;

// A link styled as a toggle. With JavaScript the knob first slides to the other side,
// then we navigate. Without JavaScript it is still a plain working link.
export function LanguageSwitch({ currentLocale, label }: LanguageSwitchProps) {
  const router = useRouter();
  const otherLocale = locales.find((locale) => locale !== currentLocale) ?? currentLocale;
  const [shownLocale, setShownLocale] = useState<Locale>(currentLocale);

  // With Cache Components, Next keeps the page we left mounted but hidden (React <Activity>),
  // so it would come back on "Back" with the knob still on the other side.
  // Effects are cleaned up when a page is hidden, so the cleanup puts the knob back.
  useEffect(() => {
    return () => setShownLocale(currentLocale);
  }, [currentLocale]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // let ctrl/cmd-click open a new tab as usual
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;

    event.preventDefault();
    setShownLocale(otherLocale);
    window.setTimeout(() => router.push(`/${otherLocale}`), knobSlideDurationMs);
  }

  return (
    <Link
      href={`/${otherLocale}`}
      hrefLang={otherLocale}
      className={styles.switch}
      data-locale={shownLocale}
      aria-label={label}
      onClick={handleClick}
    >
      <span className={styles.option} data-active={shownLocale === "ru"}>
        RU
      </span>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.knob} />
      </span>
      <span className={styles.option} data-active={shownLocale === "en"}>
        EN
      </span>
    </Link>
  );
}
