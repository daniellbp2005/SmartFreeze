'use client'
import styles from "./footer.module.scss";
import { Refrigerator, House, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathername = usePathname();
  return (
    <>
      <button className={styles.addProduto}>
        <p>Adicionar Produto +</p>
      </button>
      <footer className={styles.tabBar}>
        <div className={`${styles.col}  ${pathername === "/home" ? styles.active : ""}`}>
          <div className={`${styles.tabItem}`}>
            <Link className={styles.tabLink} href={"/home"}>
              <div className={styles.home}>
                <House size={24} />
              </div>
              <div className={styles.tabTitle}>Home</div>
            </Link>
          </div>
        </div>
        <div className={`${styles.col}  ${pathername === "/fridger" ? styles.active : ""}`}>
          <div className={styles.tabItem}>
            <Link className={styles.tabLink} href={"/fridger"}>
              <div className={styles.fridge}>
                <Refrigerator size={24} />
              </div>
              <div className={styles.tabTitle}>Fridge</div>
            </Link>
          </div>
        </div>
        <div className={`${styles.col}  ${pathername === "/configuracoes" ? styles.active : ""}`}>
          <div className={styles.tabItem}>
            <Link className={styles.tabLink} href={"/configuracoes"}>
              <div className={styles.ajustes}>
                <Settings size={24} />
              </div>
              <div className={styles.tabTitle}>Ajustes</div>
            </Link>
          </div>
        </div>
        <div className={`${styles.col}  ${pathername === "/editar" ? styles.active : ""}`}>
          <div className={styles.tabItem}>
            <Link className={styles.tabLink} href={"/perfil"}>
              <div className={styles.perfil}>
                <UserRound size={24} />
              </div>
              <div className={styles.tabTitle}>Perfil</div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
