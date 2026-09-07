import styles from "./cardAdd.module.scss";
import { PlusCircle } from "lucide-react";

export default function CardAdd() {
    return (
        <div className={styles.cardAdd}>
            <PlusCircle size={24} />
            <p>Adicionar Geladeira</p>
        </div>
    )
}
