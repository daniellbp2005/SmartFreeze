import styles from "./page.module.scss";
import { AppleIcon, Trash2, PlusIcon, PlusCircle } from "lucide-react";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.tituloFiltro}>
          Bem vindo, <span>Gustavo</span>
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
          <Card />
          <Card />
          <CardAdd />
        </section>
      </main>
    </>
  );
}
