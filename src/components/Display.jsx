import styles from "./Display.module.css";

export default function Display({ displayValue }) {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
}
