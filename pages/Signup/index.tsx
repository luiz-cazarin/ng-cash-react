import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import StyledButton from "../../components/Layout/StyledButton";
import styles from "./Signup.module.css";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (user.username.length >= 3 && user.password.length >= 3) {
      await axios
        .post("http://localhost:3000/api/users", {
          username: user.username,
          password: user.password,
        })
        .then((res) => {
          router.push("/Login");
        })
        .catch((err) => {
          window.alert(err.message);
        });
    }
  };

  const handleChange = (event: any) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className={styles.body}>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className={styles.title}>Sign Up</h3>
            <div className={styles.input__area}>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Username"
                className={
                  user.username.length >= 3 ? styles.input : styles.inputError
                }
              />
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                placeholder="********"
                className={
                  user.password.length >= 3 ? styles.input : styles.inputError
                }
              />
            </div>
            <StyledButton text="Criar conta" type="submit"></StyledButton>
            <Link href="/Login">
              <p className={styles.register__button}>Ja tenho uma conta</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
