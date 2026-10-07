import styles from './alimentos.module.scss';
import {Refrigerator, PlusIcon, Trash2} from "lucide-react";
import Link from "next/link";


export default function ModalAlimentos({ geladeira, onClose, onMove }) {
    return (
        <div className={styles.modal}>
            <div className={styles.conteudo}>
                <div className={styles.row}>
                    <h2>{geladeira.nome}</h2>
                </div>
                <div className={styles.body}>
                    <div className={styles.ladoInfo}>
                        <h3>Descrição</h3>
                        <p><span>Marca: </span>{geladeira.marca}</p>
                        <p><span>Categoria: </span> {geladeira.categoria}</p>
                        <p><span>Validade: </span> {geladeira.validade}</p>
                        <p><span>Quantidade: </span>{geladeira.quantidade}</p>
                        <p><span>Marca: </span> {geladeira.marca}</p>
                    </div>
                    <div className={styles.ladoImg}>
                        <Refrigerator style={{ width: "100%", height: "100%", padding: "10px" }} />
                    </div>
                </div>
                <div className={styles.rowCol}>
                    <Link style={{width: 500}} href={'/home/'+geladeira.id}> <button onClick={onMove}>Efetuar</button></Link>
                    <button onClick={onClose}>Sair</button>
                </div>
            </div>
        </div>
    );
}