import styles from "./card.module.scss";
import { AppleIcon, PlusIcon, Trash2} from "lucide-react";


export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <div className={styles.imgCard}>
                    <AppleIcon size={24} />
                </div>
                <div className={styles.tituloCard}>
                    <h3>Título do Card</h3>
                    <p>
                        Unidades: <span>3</span>
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

