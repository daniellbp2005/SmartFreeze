"use client";
import Link from "next/link";
import styles from "./fridger.module.scss";
import Geladeira from "@/components/Geladeira";
import GeladeiraDesktop from "@/components/CardDesktopGeladeira";
import CardAdd from "@/components/CardAdd"
import { useState, useEffect } from "react";
import Filtros from "@/components/Filtros";
import ModalGeladeiras from "@/components/ModalGeladeiras";

export default function Fridger() {
    const [geladeiras, setGeladeiras] = useState([]);
    const [selecionada, setSelecionado] = useState(null);

    useEffect(() => {
        async function carregarGeladeiras() {
            const linkAPI = await fetch("http://localhost:3005/api/geladeiras");
            const data = await linkAPI.json();
            setGeladeiras(data.geladeiras ?? []);
        }
        carregarGeladeiras();
    }, []);

    return (
        <>
            <main className={styles.main}>
                <div className={styles.tituloFiltro}> Geladeiras</div>
                <Filtros />
                <section className={styles.section}>
                    {geladeiras.map((g) => (
                        <Link key={g.id} href={`/fridger/`}>
                            <Geladeira geladeira={g} onClick={() => setSelecionado(g)} />
                            <GeladeiraDesktop geladeira={g} onClick={() => setSelecionado(g)} />
                        </Link>
                    ))}
                    <CardAdd />
                    {selecionada && (
                        <ModalGeladeiras geladeira={selecionada} onClose={() => setSelecionado(null)} />
                    )}
                </section>
            </main>
        </>
    );
}