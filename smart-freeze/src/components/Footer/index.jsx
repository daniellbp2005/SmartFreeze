import styles from "./footer.module.scss";
import { Refrigerator, House, Settings, UserRound } from "lucide-react";

export default function Footer() {
  return (
    <>
      <button className={styles.addProduto}>
        <p>Adicionar Produto +</p>
      </button>
      <footer className={styles.tabBar}>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <div className={styles.home}>
              <House size={24} />
            </div>
            <div className={styles.tabTitle}>Home</div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <div className={styles.fridge}>
              <Refrigerator size={24} />
            </div>
            <div className={styles.tabTitle}>Fridge</div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <div className={styles.ajustes}>
              <Settings size={24} />
            </div>
            <div className={styles.tabTitle}>Ajustes</div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.tabItem}>
            <div className={styles.perfil}>
              <UserRound size={24} />
            </div>
            <div className={styles.tabTitle}>Perfil</div>
          </div>
        </div>
      </footer>
    </>
  );
}
