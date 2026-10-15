import styles from "./geladeira.module.scss";
import { Refrigerator, PlusIcon, Trash2} from "lucide-react";


export default function Card({ geladeira, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
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
        </div>
    );
}

