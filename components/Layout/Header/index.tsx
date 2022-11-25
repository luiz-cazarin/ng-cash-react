import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();
  return (
    <>
      {route.pathname !== "/Login" && route.pathname !== "/Signup" && (
        <div className={styles.header}>
          <Link href="/">
            <Image
              src={require("../../../assets/NG.CASH.png")}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <Link href="/Login">
            <p>Log-out</p>
          </Link>
        </div>
      )}
    </>
  );
}
