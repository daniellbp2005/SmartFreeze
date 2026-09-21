import styles from "./card.module.scss";
import {Pizza,GlassWater,Milk,Beef,AppleIcon, PlusIcon, Trash2} from "lucide-react";


export default function Card({ alimento }) {
    return (

        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <div className={styles.imgCard}>
                    {alimento.categoria === "frutas" && <AppleIcon size={24} />}
                    {alimento.categoria === "bebidas" && <GlassWater size={24} />}
                    {alimento.categoria === "laticinios" && <Milk size={24} />}
                    {alimento.categoria === "carnes" && <Beef size={24} />}
                    {alimento.categoria === "outros" && <Pizza size={24} />}
                </div>
                <div className={styles.tituloCard}>
                    <h3>{alimento?.nome[0]?.toUpperCase() + alimento.nome.substring(1) || "Nome do Alimento" }</h3>
                    <p>
                        Unidades: <span>{alimento?.quantidade || 0}</span>
                    </p>
                </div>
            </div>
            <div className={styles.config}>
                <button className={styles.addButton}
                // onClick={Add}
>
                    <PlusIcon size={24} />
                </button>
                <button className={styles.deleteButton}
                // onClick={Remove}
                >
                    <Trash2 size={24} />
                </button>
            </div>
        </div>
    );
}

