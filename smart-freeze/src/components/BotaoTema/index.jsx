'use client';
import { useState, useEffect } from "react";
import { ToggleRight } from "lucide-react";
import styles from "./mudarTema.module.scss";

export default function BotaoTema() {
    const [guardado, setGuardado] = useState("");


    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema") || "escuro";

        if (localStorage.getItem("tema")) {
            setGuardado(temaSalvo);
            document.body.classList.add(temaSalvo);
        } else {
            setGuardado("escuro");
            document.body.classList.add("escuro");
        }
    }, []);

    function alternarTema() {
        if (guardado === "escuro") {
            document.body.classList.remove("escuro");
            document.body.classList.add("claro");
            localStorage.setItem("tema", "claro")
            setGuardado("claro");
        } else {
            document.body.classList.remove("claro");
            document.body.classList.add("escuro");
            localStorage.setItem("tema", "escuro");
            setGuardado("escuro");
        }
    }
    return (
        <div className={styles.cardTema} onClick={alternarTema} >
            <ToggleRight size={50} />
            <div className={styles.tituloCard}>
                <h3>Mudar Tema</h3>
                <p>Alterne entre tema claro e escuro</p>
            </div>
        </div >
    )
}