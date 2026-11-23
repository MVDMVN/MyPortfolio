import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  id: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ id, title, intro }: SectionHeadingProps) {
  return (
    <header className={styles.heading}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
