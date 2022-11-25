import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import StyledButton from "../components/Layout/StyledButton/index";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.balance}>
            <p className={styles.value}>R$ 40.000,00</p>
          </div>
          <div className={styles.buttons}>
            <Link href="/Transfer">
              <StyledButton text="Transferir" subtitle="envio imediato" width={215} />
            </Link>
            <Link href="/Transactions">
              <StyledButton text="Transações" width={215} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
