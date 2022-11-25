import styles from "./StyledButton.module.css";

export default function StyledButton({ text, width, type }: any) {
  return (
    <button type={type} className={styles.btn}>
      <div className={styles.button2} style={{ width: width }}>
        <div className={styles.button} style={{ width: width }}>
          <p className={styles.text__button}>{text}</p>
        </div>
      </div>
    </button>
  );
}
