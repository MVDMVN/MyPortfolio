import type { Dictionary } from "@/i18n/getDictionary";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Workflow.module.scss";

type WorkflowProps = {
  dictionary: Dictionary["workflow"];
};

export function Workflow({ dictionary }: WorkflowProps) {
  return (
    <section className={styles.section} aria-labelledby="workflow">
      <SectionHeading id="workflow" title={dictionary.title} intro={dictionary.intro} />
      <ol className={styles.steps}>
        {dictionary.steps.map((step, stepIndex) => (
          <Reveal key={step.title} as="li" className={styles.step} delay={stepIndex * 0.08}>
            <span className={styles.number}>{String(stepIndex + 1).padStart(2, "0")}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
            <ul className={styles.tools}>
              {step.tools.map((tool) => (
                <li key={tool} className={styles.tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
