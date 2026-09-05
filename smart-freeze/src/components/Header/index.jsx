import styles from "./header.module.scss";
import { Refrigerator, House, Settings, UserRound, CircleUserRound, LogOut} from "lucide-react";

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
        
        <ul className={styles.sideBar}>
          <li className={styles.liSide}><House size={24} /><p>Home</p></li>
          <li className={styles.liSide}><Refrigerator size={24} /><p>Geladeira</p></li>
          <li className={styles.liSide}><Settings size={24} /><p>Configurações</p></li>
          <li className={styles.liSide}><UserRound size={24} /><p>Perfil</p></li>
          <li className={styles.liSide}><button className={styles.btnSair}><p>Sair</p> <LogOut size={24} /></button></li>
        </ul>

        <div className={styles.perfil}>
          <CircleUserRound size={24} />
        </div>

      </header>
    </>
  );
}
