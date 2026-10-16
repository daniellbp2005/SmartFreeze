import styles from './alimentos.module.scss';
import { GlassWater, Carton, Apple, Milk, Beef, AppleIcon, Cuboid, X, CircleQuestionMark } from "lucide-react";
import { useState } from 'react';

export default function ModalAlimentos({ alimento, onClose, OnAdd, OnRemove, OnEditar }) {
    const [isEditing, setIsEditing] = useState(false);
    const [dadosEdicao, setDadosEdicao] = useState({
        ...alimento,
        validade: alimento?.validade ? String(alimento.validade).split("T")[0] : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosEdicao({ ...dadosEdicao, [name]: value });
    };

    const handleSalvar = () => {
        const payload = {
            ...dadosEdicao,
            validade: dadosEdicao.validade ? String(dadosEdicao.validade).split("T")[0] : "",
        };
        OnEditar(payload);
        setIsEditing(false);
    };
    return (
        <div className={styles.modal}>
            <div className={styles.conteudo}>
                <div className={styles.row}>
                    <h2>{alimento?.nome[0]?.toUpperCase() + alimento.nome.substring(1) || "Nome do Alimento"}</h2>
                </div>
                <div className={styles.body}>
                    <div className={styles.ladoInfo}>
                        <h3>Descrição</h3>
                        {isEditing ? (

                            <div className={styles.row}>

                                <p><span>Marca: </span><input type="text" name="marca" value={dadosEdicao.marca} onChange={handleChange} /></p>
                                <p><span>Categoria: </span>
                                    <select name="categoria" value={dadosEdicao.categoria} onChange={handleChange}>
                                        <option value="">Selecione</option>
                                        <option value="Hortifrúti">Frutas</option>
                                        <option value="Bebidas">Bebidas</option>
                                        <option value="Frios">Frios</option>
                                        <option value="Laticínios">Laticínios</option>
                                        <option value="Carnes">Carnes</option>
                                        <option value="Outros">Outros</option>
                                    </select></p>
                                <p><span>Validade: </span><input type="date" name="validade" value={dadosEdicao.validade?.slice(0, 10) || ""} onChange={handleChange} /></p>
                                <p><span>Quantidade: </span><input type="number" name="quantidade" value={dadosEdicao.quantidade} onChange={handleChange} /></p>
                            </div>
                        ) : (
                            <>
                                <p><span>Marca: </span>{alimento.marca}</p>
                                <p><span>Categoria: </span> {alimento.categoria}</p>
                                <p><span>Validade: </span> {alimento?.validade?.slice(0, 10) || "Data não disponível"}</p>
                                <p><span>Quantidade: </span>{alimento.quantidade}</p>
                            </>
                        )}
                    </div>
                    <div className={styles.ladoImg} style={{ display: isEditing ? 'none' : 'block' }}>
                        {alimento.categoria === "Laticínios" ? <Carton size={175} /> : null}
                        {alimento.categoria === "Bebidas" ? <GlassWater size={175} /> : null}
                        {alimento.categoria === "Frios" ? <Cuboid size={175} /> : null}
                        {alimento.categoria === "Carnes" ? <Beef size={175} /> : null}
                        {alimento.categoria === "Hortifrúti" ? <Apple size={175} /> : null}
                        {alimento.categoria === "Outros" ? <CircleQuestionMark size={175} /> : null}
                    </div>
                </div>
                <div className={styles.rowCol}>
                    {isEditing ? (
                        <>
                            <button onClick={handleSalvar}>Salvar</button>
                            <button onClick={() => setIsEditing(false)}>Cancelar</button>
                        </>
                    ) : (
                        <div className={styles.rowBotoes}>
                            <div className={styles.row}>
                                <button className={styles.addButton} onClick={OnAdd}>+1 Unidade</button>
                                <button className={styles.putButton} onClick={() => setIsEditing(true)}>Editar</button>
                            </div>
                            <button className={styles.deleteButton} onClick={OnRemove}>Remover</button>
                            <button
                                type="button"
                                className={styles.fecharButton}
                                onClick={onClose}
                                aria-label="Fechar"
                            >
                                <X size={15} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}