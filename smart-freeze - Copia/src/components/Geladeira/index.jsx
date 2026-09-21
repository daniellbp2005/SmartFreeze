import styles from "./geladeira.module.scss";
import { Refrigerator, PlusIcon, Trash2} from "lucide-react";


export default function Card({ geladeira }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <div className={styles.imgCard}>
                    <Refrigerator size={24} />
                </div>
                <div className={styles.tituloCard}>
                    <h3>{geladeira?.nome || "Nome da Geladeira" }</h3>
                    <p>
                        Unidades: <span>{geladeira?.quantidade || 0}</span>
                    </p>
                </div>
            </div>
            <div className={styles.config}>
                <button className={styles.addButton}>
                    <PlusIcon size={24} />
                </button>
                <button className={styles.deleteButton}>
                    <Trash2 size={24} />
                </button>
            </div>
        </div>
    );
}

