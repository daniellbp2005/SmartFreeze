import styles from "./cardDesktopGeladeira.module.scss";
import {Refrigerator,PlusIcon,Trash2} from "lucide-react";


export default function CardDesktop({geladeira, onClick}) {
    if(!geladeira) return null;
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.imgBg}>
                <div className={styles.imgCard}>
                    <Refrigerator size={24} />
                </div>
            </div>
            <div className={styles.textContent}>
                <div className={styles.cardTitle}>
                    <div className={styles.tituloCard}>
                        <h3>{geladeira?.nome[0]?.toUpperCase() + geladeira.nome.substring(1) || "Nome do geladeira" }</h3>
                    <p>
                        Unidades: <span>{geladeira?.quantidade || 0}</span>
                    </p>
                    </div>
                </div>
                <div className={styles.config}>
                    <button className={styles.addButton}
                    //onClick={Add}
                    >
                        <PlusIcon size={24} />
                    </button>
                    <button className={styles.deleteButton}
                    //onClick={Remove}
                    >
                        <Trash2 size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}