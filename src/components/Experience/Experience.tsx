import type { Dictionary } from "@/i18n/getDictionary";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Experience.module.scss";

type ExperienceProps = {
  dictionary: Dictionary["experience"];
};

export function Experience({ dictionary }: ExperienceProps) {
  return (
    <section className={styles.section} aria-labelledby="experience">
      <SectionHeading id="experience" title={dictionary.title} />
      <ol className={styles.timeline}>
        {dictionary.jobs.map((job) => (
          <Reveal key={job.company} as="li" className={styles.job}>
            <p className={styles.period}>{job.period}</p>
            <div className={styles.details}>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.role}>{job.role}</p>
              <ul className={styles.points}>
                {job.points.map((point) => (
                  <li key={point} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
