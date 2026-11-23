"use client";

import { motion, type Variants } from "motion/react";
import styles from "./PostbackLog.module.scss";

type LogStage = "click" | "lead" | "deposit";

type LogLine = {
  stage: LogStage;
  method: string;
  request: string;
  result: string;
};

// A sample of what a working chain looks like: one click_id travels through every step
const logLines: LogLine[] = [
  { stage: "click", method: "GET", request: "/click?campaign=crypto_ua&sub1=buyer07", result: "click_id=8f3a1c" },
  { stage: "lead", method: "POST", request: "/lead  form → CRM", result: "201" },
  { stage: "lead", method: "GET", request: "/postback?subid=8f3a1c&status=lead", result: "200" },
  { stage: "lead", method: "CAPI", request: "Lead  event_id=8f3a1c", result: "dedup ✓" },
  { stage: "deposit", method: "GET", request: "/postback?subid=8f3a1c&status=sale&payout=350", result: "200" },
];

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35, delayChildren: 0.4 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function PostbackLog({ title }: { title: string }) {
  return (
    <motion.figure
      className={styles.window}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label={title}
    >
      <div className={styles.titleBar}>
        <span className={styles.dots} aria-hidden="true" />
        <span className={styles.title}>{title}</span>
      </div>
      <motion.ol className={styles.lines} variants={listVariants} initial="hidden" animate="visible">
        {logLines.map((line) => (
          <motion.li key={`${line.method}${line.request}`} className={styles.line} variants={lineVariants}>
            <span className={styles.method} data-stage={line.stage}>
              {line.method}
            </span>
            <span className={styles.request}>{line.request}</span>
            <span className={styles.result}>{line.result}</span>
          </motion.li>
        ))}
      </motion.ol>
    </motion.figure>
  );
}
