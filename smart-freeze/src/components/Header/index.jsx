import styles from "./header.module.scss";
import Link from "next/link";
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
          <li className={styles.liSide}><House size={24} /><p><Link href={"/"}>Home</Link></p></li>
          <li className={styles.liSide}><Refrigerator size={24} /><p><Link href={"/fridger"}>Geladeira</Link></p></li>
          <li className={styles.liSide}><Settings size={24} /><p><Link href={"/configuracoes"}>Configurações</Link></p></li>
          <li className={styles.liSide}><UserRound size={24} /><p><Link href={"perfil/"}>Perfil</Link></p></li>
          <li className={styles.liSide}><button className={styles.btnSair}><p>Sair</p> <LogOut size={24} /></button></li>
        </ul>

        <div className={styles.perfil}>
          <CircleUserRound size={24} />
        </div>

      </header>
    </>
  );
}
