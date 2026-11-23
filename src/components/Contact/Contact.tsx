import type { Dictionary } from "@/i18n/getDictionary";
import { contactLinks } from "@/data/contactLinks";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Contact.module.scss";

type ContactProps = {
  dictionary: Dictionary["contact"];
};

export function Contact({ dictionary }: ContactProps) {
  const links = [
    { label: dictionary.telegram, value: "@MVDMVNNN", href: contactLinks.telegram },
    { label: dictionary.email, value: "edifens@gmail.com", href: contactLinks.email },
    { label: dictionary.github, value: "github.com/MVDMVN", href: contactLinks.github },
  ];

  return (
    <section className={styles.section} aria-labelledby="contact">
      <Reveal className={styles.panel}>
        <h2 id="contact" className={styles.title}>
          {dictionary.title}
        </h2>
        <p className={styles.text}>{dictionary.text}</p>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkValue}>{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
