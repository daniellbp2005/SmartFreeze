import styles from "./config.module.scss";
import { CircleUserRound } from "lucide-react";
import { ToggleRight } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function Config() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.tituloFiltro}> Configurações</div>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <CircleUserRound size={50}/>
                        <Link href="/editar">
                        <div className={styles.tituloCard}>
                            <h3>Editar Perfil</h3>
                            <p>Edite as informações do perfil</p>
                        </div>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <ToggleRight size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Mudar Tema</h3>
                            <p>Alterne entre tema claro e escuro</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <ArrowLeftRight size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Trocar Geladeira</h3>
                            <p>Altere a geladeira em uso</p>
                        </div>
                    </div>
                    <div className={styles.logoutMobile}>
                        <LogOut size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Sair</h3>
                            <p>Saia da sua conta</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}