import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitch.module.scss";

type LanguageSwitchProps = {
  currentLocale: Locale;
  label: string;
};

// Looks like a toggle, works as a plain link to the other language version:
// no client JavaScript, and it still works if JS fails to load
export function LanguageSwitch({ currentLocale, label }: LanguageSwitchProps) {
  const otherLocale = locales.find((locale) => locale !== currentLocale) ?? currentLocale;

  return (
    <Link
      href={`/${otherLocale}`}
      hrefLang={otherLocale}
      className={styles.switch}
      data-locale={currentLocale}
      aria-label={label}
    >
      <span className={styles.option} data-active={currentLocale === "ru"}>
        RU
      </span>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.knob} />
      </span>
      <span className={styles.option} data-active={currentLocale === "en"}>
        EN
      </span>
    </Link>
  );
}
