import styles from "./header.module.scss";
import { CircleUserRound } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/img/snowflake.png" alt="Logo" className={styles.logo} />
          <p className={styles.titulo}>
            <b>Smart Freezer</b>
          </p>
        </div>
        <div className={styles.perfil}>
          <CircleUserRound size={24} />
        </div>
      </header>
    </>
  );
}
