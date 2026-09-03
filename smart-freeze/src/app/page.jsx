import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.tituloFiltro}>Geladeira de <span>Gustavo</span></div>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple-icon lucide-apple"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>
              </div>
              <div className={styles.tituloCard}>
                <h3>Título do Card</h3>
                <p>Unidades: <span>3</span></p>
              </div>  
            </div>
            <div className={styles.config}>
              <button className={styles.addButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              </button>
              <button className={styles.deleteButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
