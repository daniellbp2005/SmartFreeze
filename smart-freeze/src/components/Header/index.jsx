"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import { Refrigerator, House, Settings, UserRound, CircleUserRound, LogOut} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

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
          <Link href={"/home"}><li className={`${styles.liSide} ${pathname === "/home" ? styles.active : "" }`}><House size={24} style={{marginLeft:10}} /><p>Home</p></li></Link>
          <li className={`${styles.liSide} ${pathname === "/fridger" ? styles.active : ""}`}><Refrigerator size={24} style={{marginLeft:10}}/><p><Link href={"/fridger"}>Geladeira</Link></p></li>
          <li className={`${styles.liSide} ${pathname === "/configuracoes" ? styles.active : ""}`}><Settings size={24} style={{marginLeft:10}}/><p><Link href={"/configuracoes"}>Configurações</Link></p></li>
          <li className={`${styles.liSide} ${pathname === "/editar" ? styles.active : ""}`}><UserRound size={24} style={{marginLeft:10}}/><p><Link href={"/editar"}>Perfil</Link></p></li>
          <li className={`${styles.liSide} ${styles.btnLiExit}`}><button className={styles.btnSair}><p><Link href={"/"}>Sair</Link></p> <LogOut size={24} /></button></li>
        </ul>

        <div className={styles.perfil}>
          <CircleUserRound size={24} />
        </div>
      </header>
    </>
  );
}
