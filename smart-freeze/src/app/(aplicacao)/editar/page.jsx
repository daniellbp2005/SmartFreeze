import styles from "./editar.module.scss";
import { CircleUserRound } from "lucide-react";
import { Pencil } from "lucide-react";
import { AtSign } from "lucide-react";
import { Lock } from "lucide-react";

export default function Editar() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.tituloFiltro}>Editar Perfil</div>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <CircleUserRound size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Editar Foto de Perfil</h3>
                            <p>Escolha sua foto de perfil</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Pencil size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Editar Nome de Usuário</h3>
                            <p>Usuário atual: [usuario]</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <AtSign size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Editar Email</h3>
                            <p>Email atual: [email]</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Lock size={50}/>
                        <div className={styles.tituloCard}>
                            <h3>Editar Senha</h3>
                            <p>Senha atual: ********</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}