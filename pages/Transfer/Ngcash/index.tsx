import styles from "./Ngcash.module.css";
import Link from "next/link";
import StyledButton from "../../../components/Layout/StyledButton";

export default function Ngcash() {
  return (
    <>
      <div className={styles.body}>
        <div>
          <div className={styles.box__title}>
            <h3 className={styles.title}>
              Transferencia entre contas NG.CASH:
            </h3>
            <Link href="/Transfer">
              <div className={styles.back_button}>Voltar</div>
            </Link>
          </div>
          <div className={styles.input__area}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username do usuario que vai receber"
              className={styles.input}
            />
            <input
              type="number"
              name="value"
              id="value"
              placeholder="R$ 0,00"
              className={styles.input}
            />
          </div>
          <Link href="/">
            <StyledButton text="Transferir" width={440} />
          </Link>
        </div>
      </div>
    </>
  );
}
