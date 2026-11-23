import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/getDictionary";
import styles from "./not-found.module.scss";

export default async function NotFound() {
  const dictionary = await getDictionary();
  const locale = await getLocale();

  return (
    <main className={styles.notFound}>
      <h1 className={styles.title}>{dictionary.notFound.title}</h1>
      <Link className={styles.link} href={`/${locale}`}>
        {dictionary.notFound.backHome}
      </Link>
    </main>
  );
}
