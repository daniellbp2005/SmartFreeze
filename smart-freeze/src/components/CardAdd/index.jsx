'use client'
import styles from "./cardAdd.module.scss";
import { PlusCircle } from "lucide-react";
import FormAddAlimento from "../formAddAlimento";
import { useState } from "react";

export default function CardAdd({ onClick }) {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleClick = () => {
        setMostrarFormulario(true);
        if (onClick) onClick();
    };

    return (
        <>
            <div className={styles.cardAdd} onClick={handleClick}>
                <PlusCircle size={24} />
                <p>Adicionar Produto</p>
            </div>

            {mostrarFormulario && (
                <FormAddAlimento onClose={() => setMostrarFormulario(false)} />
            )}
        </>
    );
}
