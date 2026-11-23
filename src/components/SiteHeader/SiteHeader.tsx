import Link from "next/link";
import { getLocale, type Dictionary } from "@/i18n/getDictionary";
import { locales } from "@/i18n/config";
import styles from "./SiteHeader.module.scss";

type SiteHeaderProps = {
  dictionary: Dictionary["nav"];
};

export async function SiteHeader({ dictionary }: SiteHeaderProps) {
  const currentLocale = await getLocale();
  const otherLocale = locales.find((locale) => locale !== currentLocale) ?? currentLocale;

  const navigationLinks = [
    { href: "#workflow", label: dictionary.workflow },
    { href: "#experience", label: dictionary.experience },
    { href: "#skills", label: dictionary.skills },
    { href: "#contact", label: dictionary.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${currentLocale}`} className={styles.logo} aria-label="Andrey Melnichuk">
          AM
        </Link>
        <nav className={styles.navigation} aria-label="Main">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navigationLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href={`/${otherLocale}`}
          hrefLang={otherLocale}
          className={styles.languageSwitch}
          aria-label={dictionary.switchLanguageLabel}
        >
          {dictionary.switchLanguage}
        </Link>
      </div>
    </header>
  );
}
