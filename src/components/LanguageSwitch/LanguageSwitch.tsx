"use client";

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
// then the browser loads the other language version. Without JavaScript it is a plain link.
//
// Why a full page load and not router.push: /en and /ru have separate root layouts
// (<html lang> differs). A client-side push kept the old page mounted but hidden
// (Cache Components keep visited routes in React <Activity>), and the scroll position
// ended up in the middle of the new page. A full load starts the page cleanly at the top.
export function LanguageSwitch({ currentLocale, label }: LanguageSwitchProps) {
  const otherLocale = locales.find((locale) => locale !== currentLocale) ?? currentLocale;
  const [shownLocale, setShownLocale] = useState<Locale>(currentLocale);
  const targetPath = `/${otherLocale}`;

  // "Back" may restore this page from the browser's back-forward cache, frozen mid-switch
  // with the knob on the other side. pageshow with persisted=true fires exactly in that case.
  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) setShownLocale(currentLocale);
    }
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [currentLocale]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // let ctrl/cmd-click open a new tab as usual
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;

    event.preventDefault();
    setShownLocale(otherLocale);
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- full load on purpose, see above
    window.setTimeout(() => window.location.assign(targetPath), knobSlideDurationMs);
  }

  return (
    // A plain <a>, not next/link: we want a real page load here (see the comment above)
    <a
      href={targetPath}
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
    </a>
  );
}
