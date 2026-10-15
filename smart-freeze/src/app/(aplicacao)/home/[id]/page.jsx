'use client'
import { useParams } from "next/navigation";
import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import ModalAlimentos from "@/components/ModalAlimentos";
import Filtros from "@/components/Filtros";
import { useState, useEffect } from "react";

export  default  function Home() {
  const [alimentos, setAlimentos] = useState([]);
  const params = useParams();
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    async function carregarAlimentos() {
      try{
      const linkAPI = await fetch("http://localhost:3005/api/alimentos");
      const data = await linkAPI.json();
      const alimentosDaGeladeira = Array.isArray(data.alimentos)
      ? data.alimentos.filter(a => a.uid == params.id)
      : [];
      const alimentosFiltrados = filtro === 'todos'
        ? alimentosDaGeladeira
        : alimentosDaGeladeira.filter(a => a.categoria === filtro);
      setAlimentos(alimentosFiltrados);
    } catch (error){
      console.error("Erro ao carregar alimentos:", error);
    } }
    carregarAlimentos();
  }, [params.id, filtro]);
  const [selecionada,setSelecionado] = useState(null);
  const handleAdd = async () => {
    if (!selecionada) return;
    const novaQuantidade = Number(selecionada.quantidade) + 1;
    
    try {
      const res = await fetch(`http://localhost:3005/api/alimentos/${selecionada.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...selecionada,
          quantidade: novaQuantidade
        })
      });
      
      if (res.ok) {
        setAlimentos(alimentos.map(a => 
          a.id === selecionada.id ? { ...a, quantidade: novaQuantidade } : a
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

        <Filtros texto={"Filtre Por:"}
          todos={() => setFiltro('todos')}
          laticinios={() => setFiltro('Laticínios')}
          bebidas={() => setFiltro('Bebidas')}
          frios={() => setFiltro('Frios')}
          carnes={() => setFiltro('Carnes')}
          hortfruti={() => setFiltro('Hortifrúti')}
          outra={() => setFiltro('Outra')}
        />

        <section className={styles.section}>
          {alimentos && alimentos.map((a) => (
            <div key={a.id}>
              <CardDesktop alimento={a} onClick={() => setSelecionado(a)} />
              <Card alimento={a} onClick={() => setSelecionado(a)}/>
            </div>
          ))}
          <CardAdd> </CardAdd>
          {selecionada && (
            <ModalAlimentos alimento={selecionada} onClose={() => setSelecionado(null)} OnAdd={handleAdd} OnRemove={handleRemove} OnEditar={handleEditar}/>
          )}
        </section>
      </main>
    </>
  );
}

