import styles from './alimentos.module.scss';
import {Carton, GlassWater, Beef, Cuboid, Apple, CircleQuestionMark} from "lucide-react";
import { useState } from 'react';

export default function ModalAlimentos({ alimento, onClose, OnAdd, OnRemove, OnEditar }) {
    const [isEditing, setIsEditing] = useState(false);
    const [dadosEdicao, setDadosEdicao] = useState(alimento);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosEdicao({ ...dadosEdicao, [name]: value });
    };

    const handleSalvar = () => {
        OnEditar(dadosEdicao);
        setIsEditing(false);
    };
    return (
        <div className={styles.modal}>
            <div className={styles.conteudo}>
                <div className={styles.row}>
                    <h2>{alimento?.nome[0]?.toUpperCase() + alimento.nome.substring(1) || "Nome do Alimento" }</h2>
                </div>
                <div className={styles.body}>
                    <div className={styles.ladoInfo}>
                        <h3>Descrição</h3>
                        {isEditing ? (
                            <>
                                <p><span>Marca: </span><input type="text" name="marca" value={dadosEdicao.marca} onChange={handleChange} /></p>
                                <p><span>Categoria: </span><input type="text" name="categoria" value={dadosEdicao.categoria} onChange={handleChange} /></p>
                                <p><span>Validade: </span><input type="date" name="validade" value={dadosEdicao.validade?.slice(0, 10) || ""} onChange={handleChange} /></p>
                                <p><span>Quantidade: </span><input type="number" name="quantidade" value={dadosEdicao.quantidade} onChange={handleChange} /></p>
                            </>
                        ) : (
                            <>
                                <p><span>Marca: </span>{alimento.marca}</p>
                                <p><span>Categoria: </span> {alimento.categoria}</p>
                                <p><span>Validade: </span> {alimento?.validade?.slice(0, 10) || "Data não disponível"}</p>
                                <p><span>Quantidade: </span>{alimento.quantidade}</p>
                            </>
                        )}
                    </div>
                    <div className={styles.ladoImg}>
                    {alimento.categoria === "Laticínios" ? <Carton size={175} /> : null}
                    {alimento.categoria === "Bebidas" ? <GlassWater size={175} /> : null}
                    {alimento.categoria === "Frios" ? <Cuboid size={175} /> : null}
                    {alimento.categoria === "Carnes" ? <Beef size={175} /> : null}
                    {alimento.categoria === "Hortifrúti" ? <Apple size={175} /> : null}
                    {alimento.categoria === "" ? <CircleQuestionMark size={175} /> : null}
                    </div>
                </div>
                <div className={styles.rowCol}>
                    {isEditing ? (
                        <>
                            <button onClick={handleSalvar}>Salvar</button>
                            <button onClick={() => setIsEditing(false)}>Cancelar</button>
                        </>
                    ) : (
                        <>
                            <button onClick={OnAdd}>+1 Unidade</button>
                            <button onClick={() => setIsEditing(true)}>Editar</button>
                            <button onClick={OnRemove}>Remover</button>
                            <button onClick={onClose}>Sair</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}