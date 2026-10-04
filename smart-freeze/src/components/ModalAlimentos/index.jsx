import styles from './alimentos.module.scss';

export default function ModalAlimentos({ alimento, onClose }) {
    return (
        <div className={styles.modal}>
            <div className={styles.conteudo}>
                <div className={styles.row}>
                    <h2>{alimento.nome}</h2>
                    <p>Marca: {alimento.marca}</p>
                </div>
                <div className={styles.body}>
                    <p>Categoria: {alimento.categoria}</p>
                    <p>Validade: {alimento.validade}</p>
                    <p>Quantidade: {alimento.quantidade}</p>
                </div>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}