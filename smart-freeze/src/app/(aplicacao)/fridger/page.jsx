import Link from "next/link";
import styles from "./fridger.module.scss";
import Geladeira from "@/components/Geladeira";
import GeladeiraDesktop from "@/components/CardDesktopGeladeira";
import CardAdd from "@/components/CardAdd"


export default function Fridger() {
    // const geladeiras = await getHomeData();

    return (
        <>
            <main className={styles.main}>
                <div className={styles.tituloFiltro}> Geladeiras</div>
                <section className={styles.section}>
                    {geladeiras.map((g) =>  (
                            <Link key={g.id} href={'/home'}>
                                <Geladeira  geladeira={g} />
                                <GeladeiraDesktop geladeira={g} />
                            </Link>
                        ))}    
                    <CardAdd />
                    {/* add quebra de linha em texto sem espaços */}
                </section>
            </main>
        </>
    );
}