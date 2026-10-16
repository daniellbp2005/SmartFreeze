'use client';
import styles from './addAlimento.module.scss';
import { useEffect, useState } from 'react';

export default function FormAddAlimento({ onClose }) {

    const [nome, setNome] = useState("")
    const [marca, setMarca] = useState("")
    const [categoria, setCategoria] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [validade, setValidade] = useState("")
    const [uid] = useState(1);

    async function fetchCriar() {
        try {
            fetch('http://localhost:3005/api/alimentos/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uid,
                    nome,
                    marca,
                    categoria,
                    quantidade: Number(quantidade),
                    validade,
                })
            });
            setNome("");
            setMarca("");
            setCategoria("");
            setQuantidade("");
            setValidade("");
        } catch (e) {
            console.error(e.message);

        }
    }

    function onClickCriar(event) {
        event.preventDefault();
        try {
            fetchCriar();
        } catch (error) {
            alert("Erro ao tentar criar!")
        }
    }

    // uid, nome, categoria, marca , quantidade

    return (
        <div className={styles.card}>
            <form className={styles.textContent} onSubmit={onClickCriar}>
                <div className={styles.cardTitle}>
                    <div className={styles.tituloCard}>
                        <h3>Novo produto</h3>
                    </div>
                </div>

                <div className={styles.body}>
                    <label htmlFor='nome' className={styles.ladoInfo}>
                        Nome
                        <input type="text" placeholder="Ex: Leite" id='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>

                    <label htmlFor='marca' className={styles.ladoInfo}>
                        Marca
                        <input type="text" placeholder="Ex: Nestlé" value={marca} id='marca' onChange={(e) => setMarca(e.target.value)} />
                    </label>

                    <label className={styles.ladoInfo}>
                        Categoria
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Hortifrúti">Hortifrúti</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Frios">Frios</option>
                            <option value="Laticínios">Laticínios</option>
                            <option value="Carnes">Carnes</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </label>

                    <label htmlFor='qtd' className={styles.ladoInfo}>
                        Quantidade
                        <input type="number" placeholder='Ex: 1' min="1" id='qtd' value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                    </label>
                    <label htmlFor="validade" className={styles.ladoInfo}>
                        Validade
                        <input type="date" value={validade} onChange={(e) => setValidade(e.target.value)} id='validade' required />
                    </label>
                </div>

                <div className={styles.rowCol}>
                    <button type="button" className={styles.cancelar} onClick={onClose}>Cancelar</button>
                    <button type="submit" className={styles.submit}>Salvar</button>
                </div>
            </form>
        </div>
    );
}