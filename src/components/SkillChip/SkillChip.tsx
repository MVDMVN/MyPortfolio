"use client";

import { motion } from "motion/react";
import styles from "./SkillChip.module.scss";

// Spring with a little overshoot: the chip lifts on hover and springs back after a press
const bounceSpring = { type: "spring", stiffness: 500, damping: 15 } as const;

export function SkillChip({ label }: { label: string }) {
  return (
    <motion.li
      className={styles.chip}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={bounceSpring}
    >
      {label}
    </motion.li>
  );
}
