'use client';
import styles from "./filtros.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Filtros({ texto,
    todos,
    laticinios,
    bebidas,
    frios,
    carnes,
    hortfruti,
    outra
}) {
    const pathname = usePathname();
    const [cat, setCat] = useState([]);
    const acoesPorCategoria = {
        "Laticínios": laticinios,
        "Bebidas": bebidas,
        "Frios": frios,
        "Carnes": carnes,
        "Hortifrúti": hortfruti,
        "Outra": outra
    }
    useEffect(() => {
        if (pathname === "/home" || pathname.startsWith("/home/")) {
            fetch("http://localhost:3005/api/alimentos")
                .then((res) => res.json())
                .then((data) => {
                    const lista = data.alimentos ?? [];
                    const valores = lista.map((item) => item.categoria);
                    const semDuplicados = [...new Set(valores.filter(Boolean))];
                    setCat(semDuplicados);
                });
        } if (pathname === "/fridger" || pathname.startsWith("/fridger/")) {
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
                        {pathname === "/home" || pathname.startsWith("/home/")
                            ? (<li style={{color: "#fff"}} onClick={todos}>Todos</li>)
                            : null
                        }
                        {cat.map((item, index) => (
                            pathname === "/home"
                                || pathname.startsWith("/home/")
                                // Caso a geladeira mude assim o filtro funciona
                                ? (<li key={`${item}-${index}`} style={{ color: '#fff' }}
                                    onClick={acoesPorCategoria[item]} >{item}</li>)
                                : (<li key={`${item}-${index}`} style={{ color: '#fff' }}>{item}</li>))
                        )
                        }
                    </ul>
                </ul>
            </div>
        </>
    );
}