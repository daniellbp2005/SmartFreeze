"use client";

import { useEffect } from "react";

export default function InicializarTema() {
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    const temaInicial = temaSalvo === "claro" ? "claro" : "escuro";

    document.body.classList.remove("claro", "escuro");
    document.body.classList.add(temaInicial);
  }, []);

  return null;
}