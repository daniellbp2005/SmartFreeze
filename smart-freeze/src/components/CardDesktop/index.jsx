import styles from "./cardDesktop.module.scss";
import { PlusIcon, Trash2, Carton, GlassWater, Beef, Cuboid, Apple, CircleQuestionMark} from "lucide-react";


export default function CardDesktop({ alimento, onClick }) {
    if (!alimento) return null;
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.imgBg}>
                <div className={styles.imgCard}>
                    {alimento.categoria === "Laticínios" ? <Carton size={24} /> : null}
                    {alimento.categoria === "Bebidas" ? <GlassWater size={24} /> : null}
                    {alimento.categoria === "Frios" ? <Cuboid size={24} /> : null}
                    {alimento.categoria === "Carnes" ? <Beef size={24} /> : null}
                    {alimento.categoria === "Hortifrúti" ? <Apple size={24} /> : null}
                    {alimento.categoria === "" ? <CircleQuestionMark size={24} /> : null}
                </div>
            </div>
            <div className={styles.textContent}>
                <div className={styles.cardTitle}>
                    <div className={styles.tituloCard}>
                        <h3>{alimento?.nome[0]?.toUpperCase() + alimento.nome.substring(1) || "Nome do Alimento"}</h3>
                        <p>
                            Unidades: <span>{alimento?.quantidade || 0}</span>
                        </p>
                    </div>
                </div>
                <div className={styles.config}>
                    {/* <button className={styles.addButton}
                    //onClick={Add}
                    >
                        <PlusIcon size={24} />
                    </button>
                    <button className={styles.deleteButton}
                    //onClick={Remove}
                    >
                        <Trash2 size={24} />
                    </button> */}
                </div>
            </div>
        </div>
    );
}