import styles from "./filtros.module.scss";

export default function Filtros() {
    return(
        <>
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
        </>
    );    
}