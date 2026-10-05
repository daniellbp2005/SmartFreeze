'use client'
import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import ModalAlimentos from "@/components/ModalAlimentos";
import { useState, useEffect } from "react";

export default function Home() {
  // Gavetas do useState (sem nenhuma tipagem de TypeScript)
  const [alimentos, setAlimentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [selecionada, setSelecionado] = useState(null);

  // O gatilho que busca os dados no backend assim que a tela abre
  useEffect(() => {
    async function carregarDadosDoBackend() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3305/api/alimentos", {
          cache: "no-store", // Garante dados atualizados no Next.js
        });

        if (!res.ok) {
          throw new Error("Erro ao carregar alimentos do backend");
        }

        const data = await res.json();
        // Guarda os dados que vieram da sua API
        setAlimentos(data.alimentos ?? []);
      } catch (error) {
        setErro(error.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    carregarDadosDoBackend();
  }, []); // Array vazio para rodar apenas uma vez ao carregar a página

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
          {/* Alertas visuais na tela para o usuário */}
          {loading && <p>Carregando alimentos do servidor...</p>}
          {erro && <p style={{ color: 'red' }}>⚠️ {erro}</p>}

          {/* Renderização da lista automática */}
          {!loading && !erro && alimentos.map((a) => (
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
