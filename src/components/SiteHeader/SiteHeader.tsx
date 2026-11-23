import Link from "next/link";
import { getLocale, type Dictionary } from "@/i18n/getDictionary";
import { Logo } from "@/components/Logo/Logo";
import { LanguageSwitch } from "@/components/LanguageSwitch/LanguageSwitch";
import styles from "./SiteHeader.module.scss";

type SiteHeaderProps = {
  dictionary: Dictionary["nav"];
};

export async function SiteHeader({ dictionary }: SiteHeaderProps) {
  const currentLocale = await getLocale();

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
          <Logo />
        </Link>
        <nav className={styles.navigation} aria-label="Main">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navigationLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.languageSwitch}>
          <LanguageSwitch currentLocale={currentLocale} label={dictionary.switchLanguageLabel} />
        </div>
      </div>
    </header>
  );
}
