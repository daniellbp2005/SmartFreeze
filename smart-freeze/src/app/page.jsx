import styles from "./page.module.scss";
import { SnowflakeIcon } from "lucide-react";

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.conteinerLogin}>
          <div className={styles.contentHeader}>
            <SnowflakeIcon size={40} stroke="#131111" />
            <h1 className={styles.titulo}>
              Olá de novo
            </h1>
          </div>
          <div className={styles.bodyLogin}>
            <label className="label" htmlFor="email">E-mail</label>
            <input className={styles.input} type="email" name="email" id="email" placeholder="suaConta@gmail.com" />
            <label className="label" htmlFor="senha">Senha</label>
            <input className={styles.input} type="password" name="senha" id="senha" placeholder="Digite aqui" />
            <button>Entrar</button>
          </div>
        </div>
      </main>
    </>
  );
}
