import styles from "./footer.module.scss";
import { Refrigerator, House, Settings, UserRound } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <button className={styles.addProduto}>
        <p>Adicionar Produto +</p>
      </button>
      <footer className={styles.tabBar}>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <Link className={styles.tabLink} href={"/"}>
              <div className={styles.home}>
                <House size={24} />
              </div>
              <div className={styles.tabTitle}>Home</div>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <Link className={styles.tabLink} href={"/fridger"}>
              <div className={styles.fridge}>
                <Refrigerator size={24} />
              </div>
              <div className={styles.tabTitle}>Fridge</div>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <Link className={styles.tabLink} href={"/configuracoes"}>
              <div className={styles.ajustes}>
                <Settings size={24} />
              </div>
              <div className={styles.tabTitle}>Ajustes</div>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
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
