import styles from "./Logo.module.scss";

// Three "lines of code" in the funnel colours: click, lead, deposit.
// Each line is indented differently, like nested code.
const codeLines = [
  { indent: 0, length: 14, colorClass: styles.click },
  { indent: 5, length: 13, colorClass: styles.lead },
  { indent: 5, length: 8, colorClass: styles.deposit },
];

const lineHeight = 4;
const lineGap = 3;

export function Logo() {
  return (
    <svg className={styles.logo} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      {codeLines.map((line, lineIndex) => (
        <rect
          key={line.colorClass}
          className={line.colorClass}
          x={1 + line.indent}
          y={1.5 + lineIndex * (lineHeight + lineGap)}
          width={line.length}
          height={lineHeight}
          rx={lineHeight / 2}
        />
      ))}
    </svg>
  );
}
