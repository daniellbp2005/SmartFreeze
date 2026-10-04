'use client'
import CardDesktop from "@/components/CardDesktop";
import styles from "./home.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import ModalAlimentos from "@/components/ModalAlimentos";
import { useState } from "react";

// async function getHomeData() {
//   const res = await fetch("http://localhost:3305/api/alimentos", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Erro ao carregar alimentos do backend");
//   }

//   const data = await res.json();
//   return data.alimentos ?? [];
// }

export default function Home() {
  // const alimentos = await getHomeData();
  const alimentos = [
  {
    "id": 1,
    "uid": "usr-a1b2c3d4",
    "nome": "Leite Integral",
    "validade": "2026-11-15",
    "categoria": "Laticínios",
    "marca": "Parmalat",
    "quantidade": 12
  },
  {
    "id": 2,
    "uid": "usr-e5f6g7h8",
    "nome": "Café Torrado e Moído",
    "validade": "2027-03-20",
    "categoria": "Mercearia",
    "marca": "Pilão",
    "quantidade": 5
  },
  {
    "id": 3,
    "uid": "usr-i9j0k1l2",
    "nome": "Detergente Neutro",
    "validade": "2028-01-10",
    "categoria": "Limpeza",
    "marca": "Ypê",
    "quantidade": 20
  },
  {
    "id": 4,
    "uid": "usr-m3n4o5p6",
    "nome": "Arroz Tipo 1 (5kg)",
    "validade": "2027-08-05",
    "categoria": "Grãos",
    "marca": "Camil",
    "quantidade": 8
  },
  {
    "id": 5,
    "uid": "usr-q7r8s9t0",
    "nome": "Azeite de Oliva Extra Virgem",
    "validade": "2027-12-01",
    "categoria": "Mercearia",
    "marca": "Gallo",
    "quantidade": 3
  },
  {
    "id": 6,
    "uid": "usr-u1v2w3x4",
    "nome": "Sabão em Pó",
    "validade": "2028-05-18",
    "categoria": "Limpeza",
    "marca": "Omo",
    "quantidade": 10
  },
  {
    "id": 7,
    "uid": "usr-y5z6a7b8",
    "nome": "Refrigerante Guaraná 2L",
    "validade": "2026-12-30",
    "categoria": "Bebidas",
    "marca": "Antarctica",
    "quantidade": 15
  },
  {
    "id": 8,
    "uid": "usr-c9d0e1f2",
    "nome": "Chocolate ao Leite",
    "validade": "2027-04-12",
    "categoria": "Doces",
    "marca": "Lacta",
    "quantidade": 25
  }
]
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
          {alimentos.map((a) => (
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

