import type { Dictionary } from "@/i18n/getDictionary";
import { PostbackLog } from "@/components/PostbackLog/PostbackLog";
import { contactLinks } from "@/data/contactLinks";
import styles from "./Hero.module.scss";

type HeroProps = {
  dictionary: Dictionary["hero"];
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.text}>
        <p className={styles.eyebrow}>{dictionary.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {dictionary.title}
        </h1>
        <p className={styles.lead}>{dictionary.lead}</p>
        <ul className={styles.facts}>
          {dictionary.facts.map((fact) => (
            <li key={fact} className={styles.fact}>
              {fact}
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href={contactLinks.telegram} target="_blank" rel="noreferrer">
            {dictionary.primaryAction}
          </a>
          <a className={styles.secondaryButton} href={contactLinks.cv} download>
            {dictionary.secondaryAction}
          </a>
        </div>
      </div>
      <PostbackLog title={dictionary.logTitle} />
    </section>
  );
}
