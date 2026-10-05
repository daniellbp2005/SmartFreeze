"use client";
import Link from "next/link";
import styles from "./fridger.module.scss";
import Geladeira from "@/components/Geladeira";
import CardAdd from "@/components/CardAdd";
import { useState, useEffect } from "react";

export default function Fridger() {
      const [geladeiras, setGeladeiras] = useState([]);
    
      useEffect(() => {
        async function carregarGeladeiras() {
          const linkAPI = await fetch("http://localhost:3005/api/geladeiras");
          const data = await linkAPI.json();
          setGeladeiras(data.geladeiras ?? [] );
        }
        carregarGeladeiras();
      }, []);
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