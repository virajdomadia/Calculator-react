import styles from "./ButtonContainer.module.css";

export default function ButtonContainer({ onButtonClick }) {
  const buttonNames = [
    "AC",
    "%",
    "DE",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}
