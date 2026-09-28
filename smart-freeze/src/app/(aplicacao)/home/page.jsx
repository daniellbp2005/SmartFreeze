import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";

async function getHomeData() {
  const res = await fetch("http://localhost:3305/api/alimentos", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar alimentos do backend");
  }

  const data = await res.json();
  return data.alimentos ?? [];
}

export default async function Home() {
  const alimentos = await getHomeData();

  return (
    <>
      <main className={styles.main}>
        <div className={styles.tituloFiltro}>
          <p>
            Bem vindo, <span>Usuário</span>
          </p>
        </div>

        <div className={styles.filtro}>
          <p className={styles.filtroText}>Filtrar Por:</p>
          <ul>
            <li>Laticínios</li>
            <li>Frutas</li>
            <li>Carnes</li>
            <li>Bebidas</li>
            <li>Outros</li>
          </ul>
        </div>

        <section className={styles.section}>
          {alimentos.map((a) => (
            <div key={a.id}>
              <CardDesktop alimento={a} />
              <Card alimento={a} />
            </div>
          ))}
          <CardAdd />
        </section>
      </main>
    </>
  );
}

