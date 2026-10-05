'use client'
import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import ModalAlimentos from "@/components/ModalAlimentos";
import { useState, useEffect } from "react";
import Filtros from "@/components/Filtros";


export  default  function Home() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    async function carregarAlimentos() {
      const linkAPI = await fetch("http://localhost:3005/api/alimentos");
      const data = await linkAPI.json();
      const alimentosFiltrados = Array.from(
      new Map(data.alimentos.map(a => [a.nome, a])).values()
    ).map(alimento => ({
  ...alimento,
  quantidade: data.alimentos
    .filter(a => a.nome === alimento.nome)
    .reduce((sum, a) => sum + Number(a.quantidade), 0)
}));
      setAlimentos(alimentosFiltrados ?? []);
    }
    carregarAlimentos();
  }, []);
  const [selecionada,setSelecionado] = useState(null);
  const handleAdd = async () => {
    if (!selecionada) return;
    
    try {
      const res = await fetch(`http://localhost:3005/api/alimentos/${selecionada.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...selecionada,
          quantidade: selecionada.quantidade + 1
        })
      });
      
      if (res.ok) {
        setAlimentos(alimentos.map(a => 
          a.id === selecionada.id ? { ...a, quantidade: a.quantidade + 1 } : a
        ));
        setSelecionado(null);
      }
    } catch (error) {
      console.error('Erro ao adicionar:', error);
    }
  };

  const handleRemove = async () => {
    if (!selecionada) return;
    
    try {
      const res = await fetch(`http://localhost:3005/api/alimentos/${selecionada.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (res.ok) {
        // Remove da lista
        setAlimentos(alimentos.filter(a => a.id !== selecionada.id));
        setSelecionado(null);
      }
    } catch (error) {
      console.error('Erro ao remover:', error);
    }
  };

  const handleEditar = async (dadosAtualizados) => {
    if (!selecionada) return;
    
    try {
      const res = await fetch(`http://localhost:3005/api/alimentos/${selecionada.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosAtualizados)
      });
      
      if (res.ok) {
        setAlimentos(alimentos.map(a => 
          a.id === selecionada.id ? dadosAtualizados : a
        ));
        setSelecionado(null);
      }
    } catch (error) {
      console.error('Erro ao editar:', error);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.tituloFiltro}>
          <p>
            Bem vindo, <span>Usuário</span>
          </p>
        </div>

        <Filtros/>

        <section className={styles.section}>
          {alimentos && alimentos.map((a) => (
            <div key={a.id}>
              <CardDesktop alimento={a} onClick={() => setSelecionado(a)} />
              <Card alimento={a} onClick={() => setSelecionado(a)}/>
            </div>
          ))}
          <CardAdd />
          {selecionada && (
            <ModalAlimentos alimento={selecionada} onClose={() => setSelecionado(null)} OnAdd={handleAdd} OnRemove={handleRemove} OnEditar={handleEditar}/>
          )}
        </section>
      </main>
    </>
  );
}

