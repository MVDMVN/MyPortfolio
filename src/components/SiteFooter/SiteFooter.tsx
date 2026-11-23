import type { Dictionary } from "@/i18n/getDictionary";
import styles from "./SiteFooter.module.scss";

type SiteFooterProps = {
  dictionary: Dictionary["footer"];
};

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <p>{dictionary.copyright}</p>
    </footer>
  );
}
