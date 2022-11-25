import Link from "next/link";
import StyledButton from "../../components/Layout/StyledButton";
import styles from "./Transfer.module.css";

export default function Transfer() {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.box__title}>
          <h3 className={styles.title}>Selecione o tipo de transação:</h3>
          <Link href="/">
            <div className={styles.back_button}>Voltar</div>
          </Link>
        </div>
        <Link href={"Transfer/Ngcash"}>
          <StyledButton text="Entre contas NG.CASH" width={440} />
        </Link>
      </div>
    </div>
  );
}
