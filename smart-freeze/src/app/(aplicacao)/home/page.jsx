import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import { AppleIcon } from "lucide-react";




export default function Home() {

  const produtos = {
    nome: "Derick",
    img: <AppleIcon size={24} />,
    unidades: 3
  }


  return (
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
        <CardDesktop produto={produtos}/>
        <CardDesktop produto={produtos}/>
        <CardDesktop produto={produtos}/>
        <CardDesktop produto={produtos}/>
        <CardDesktop produto={produtos}/>
        <CardDesktop produto={produtos}/>
        
        <Card produto={produtos} />
        <Card produto={produtos} />
        <Card produto={produtos} />
        <Card produto={produtos} />
        <Card produto={produtos} />
        
        <CardAdd />
      </section>
    </main>
  );
}
