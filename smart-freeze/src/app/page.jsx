import styles from "./page.module.scss";
import { AppleIcon, Trash2, PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.tituloFiltro}>
          Geladeira de <span>Gustavo</span>
        </div>
        <div className={styles.filtro}>
          <p className={styles.filtroText}>Filtrar Por:</p>
          <ul>
            <li>Filtro 1</li>
            <li>Filtro 2</li>
            <li>Filtro 3</li>
          </ul>
        </div>

        <section className={styles.section}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <div className={styles.imgCard}>
                <AppleIcon size={24} />
              </div>
              <div className={styles.tituloCard}>
                <h3>Título do Card</h3>
                <p>
                  Unidades: <span>3</span>
                </p>
              </div>
            </div>
            <div className={styles.config}>
              <button className={styles.addButton}>
                <PlusIcon size={24} />
              </button>
              <button className={styles.deleteButton}>
                <Trash2 size={24} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
