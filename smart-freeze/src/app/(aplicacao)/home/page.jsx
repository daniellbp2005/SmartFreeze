'use client'
import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import ModalAlimentos from "@/components/ModalAlimentos";
import { useState, useEffect } from "react";

export  default  function Home() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    async function carregarAlimentos() {
      const linkAPI = await fetch("http://localhost:3005/api/alimentos");
      const data = await linkAPI.json();
      setAlimentos(data.alimentos ?? [] );
    }
    carregarAlimentos();
  }, []);
  const [selecionada,setSelecionado] = useState(null);

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
          {alimentos && alimentos.map((a) => (
            <div key={a.id}>
              <CardDesktop alimento={a} onClick={() => setSelecionado(a)} />
              <Card alimento={a} onClick={() => setSelecionado(a)}/>
            </div>
          ))}
          <CardAdd />
          {selecionada && (
            <ModalAlimentos alimento={selecionada} onClose={() => setSelecionado(null)}/>
          )}
        </section>
      </main>
    </>
  );
}

