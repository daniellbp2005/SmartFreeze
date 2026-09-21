import styles from "./cardDesktop.module.scss";
import { PlusIcon, Trash2 } from "lucide-react";


export default function CardDesktop({produto,Add,Remove}) {
    if(!produto) return null;
    return (
        <div className={styles.card}>
            <div className={styles.imgBg}>
                <div className={styles.imgCard}>
                    {produto.img}
                </div>
            </div>
            <div className={styles.textContent}>
                <div className={styles.cardTitle}>
                    <div className={styles.tituloCard}>
                        <h3>{produto.nome} </h3>
                        <p>
                            Unidades: <span>{produto.unidades} </span>
                        </p>
                    </div>
                </div>
                <div className={styles.config}>
                    <button className={styles.addButton}
                    onClick={Add}>
                        <PlusIcon size={24} />
                    </button>
                    <button className={styles.deleteButton}
                    onClick={Remove}>
                        <Trash2 size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}