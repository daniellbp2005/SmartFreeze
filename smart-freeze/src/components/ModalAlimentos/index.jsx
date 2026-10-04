import styles from './alimentos.module.scss';

export default function ModalAlimentos({ alimento, onClose }) {
    return (
        <div className={styles.modal}>
            <div className={styles.conteudo}>
                <div className={styles.row}>
                    <h2>{alimento.nome}</h2>
                </div>
                <div className={styles.body}>
                    <div className={styles.ladoInfo}>
                        <h3>Descrição</h3>
                        <p><span>Marca: </span>{alimento.marca}</p>
                        <p><span>Categoria: </span> {alimento.categoria}</p>
                        <p><span>Validade: </span> {alimento.validade}</p>
                        <p><span>Quantidade: </span>{alimento.quantidade}</p>
                        <p><span>Marca: </span> {alimento.marca}</p>
                    </div>
                    <div className={styles.ladoImg}>
                        {/* <img src={alimento.img} alt="Foto do Alimento" /> */}
                        <img src="https://placehold.co/175x175?text=Imagem" />
                    </div>
                </div>
                <div className={styles.rowCol}>
                    <button onClick={onClose}>Efetuar</button>
                    <button onClick={onClose}>Sair</button>
                </div>
            </div>
        </div>
    );
}