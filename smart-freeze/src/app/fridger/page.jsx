import styles from "./fridger.module.scss";
import Geladeira from "@/components/Geladeira";
import CardAdd from "@/components/CardAdd"

export default function Fridger() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.tituloFiltro}> Geladeiras</div>
                <section className={styles.section}>
                    <Geladeira />
                    <Geladeira />

                    <CardAdd />

                </section>
            </main>
        </>
    );
}