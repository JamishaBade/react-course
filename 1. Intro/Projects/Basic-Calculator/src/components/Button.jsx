import styles from "./Button.module.css";
let buttonValue = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

function Button() {
  return (
    <div className={styles.container}>
      {buttonValue.map((buttons) => (
        <button className={styles.button}>{buttons}</button>
      ))}
    </div>
  );
}
export default Button;
