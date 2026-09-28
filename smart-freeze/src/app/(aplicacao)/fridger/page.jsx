import Link from "next/link";
import styles from "./fridger.module.scss";
import Geladeira from "@/components/Geladeira";
import CardAdd from "@/components/CardAdd"

async function getHomeData() {
  const res = await fetch("http://localhost:3305/api/geladeiras", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar geladeiras do backend");
  }

  const data = await res.json();
  return data.geladeiras ?? [];
}

export default async function Fridger() {
    const geladeiras = await getHomeData();
    return (
        <>
            <main className={styles.main}>
                <div className={styles.tituloFiltro}> Geladeiras</div>
                <section className={styles.section}>
                    {geladeiras.map((g) =>  (
                            <Link key={g.id} href={'/home'}>
                                <Geladeira  geladeira={g} />
                            </Link>
                        ))}    
                    <CardAdd />
                    {/* add quebra de linha em texto sem espaços */}
                </section>
            </main>
        </>
    );
}