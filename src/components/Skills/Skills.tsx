import type { Dictionary } from "@/i18n/getDictionary";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SkillChip } from "@/components/SkillChip/SkillChip";
import styles from "./Skills.module.scss";

type SkillsProps = {
  dictionary: Dictionary["skills"];
};

export function Skills({ dictionary }: SkillsProps) {
  return (
    <section className={styles.section} aria-labelledby="skills">
      <SectionHeading id="skills" title={dictionary.title} />
      <div className={styles.groups}>
        {dictionary.groups.map((group, groupIndex) => (
          <Reveal key={group.title} className={styles.group} delay={groupIndex * 0.08}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <SkillChip key={item} label={item} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
