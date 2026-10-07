'use client';
import styles from "./filtros.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Filtros({texto}) {
    const pathname = usePathname();
    const [cat, setCat] = useState([]);
    useEffect(() => {
        if (pathname === "/home") {
            fetch("http://localhost:3005/api/alimentos")
                .then((res) => res.json())
                .then((data) => {
                    const lista = data.alimentos ?? [];

                    const valores = lista.map((item) => item.categoria);

                    const semDuplicados = [...new Set(valores.filter(Boolean))];
                    setCat(semDuplicados);
                });
        } if (pathname === "/fridger") {
            fetch("http://localhost:3005/api/geladeiras")
                .then((res) => res.json())
                .then((data) => {
                    const lista = data.geladeiras ?? [];

                    const valores = lista.map((item) => item.marca);

                    const semDuplicados = [...new Set(valores.filter(Boolean))];
                    setCat(semDuplicados);
                });
        }
    }, [pathname]);
    return (
        <>
            <div className={styles.filtro}>
                <p className={styles.filtroText}>{texto} </p>
                <ul>
                    <ul>
                        {cat.map((item, index) => (
                            pathname === "/home" ? (<li key={`${item}-${index}`}>{item}</li>) : (<li key={`${item}-${index}`}>{item}</li>))
                        )
                        }
                    </ul>
                </ul>
            </div>
        </>
    );
}