import Link from "next/link";
import StyledButton from "../../components/Layout/StyledButton";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.body}>
      <div>
        <h3 className={styles.title}>Login</h3>
        <div className={styles.input__area}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className={styles.input}
          />
        </div>
        <Link href="/">
          <StyledButton text="Entrar" width={"100%"} />
        </Link>
        <Link href="/Signup">
          <p className={styles.register__button}>Criar conta</p>
        </Link>
      </div>
    </div>
  );
}
