import Link from "next/link";
import styles from "./Transactions.module.css";

export default function Transactions() {
  return (
    <>
      <div className={styles.body}>
        <div>
          <div className={styles.box__title}>
            <h3 className={styles.title}>Transações:</h3>
            <Link href="/">
              <div className={styles.back_button}>Voltar</div>
            </Link>
          </div>
          <div className={styles.tab__transactions}>
            <div className={styles.tab__header}>
              <p>nome</p>
              <p>valor</p>
              <p>cash-in/cash-out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
