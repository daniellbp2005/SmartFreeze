'use client';
import styles from "./page.module.scss";
import { SnowflakeIcon, AtSign, LockKeyhole, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Login() {
  // Aqui a baixo jápega os dados do inputs, tanto do Login e Cadastro. Falta só jogar em lista e subir no banco

  const [modo, setModo] = useState("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgErro, setErro] = useState("");
  const router = useRouter();

  function lerNome(e) {
    setNome(e.target.value);
  }
  function lerEmail(e) {
    setEmail(e.target.value);
  }
  function lerSenha(e) {
    setSenha(e.target.value);
  }

  function entrarLogin(e) {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Campos Inválidos");
      return;
    }
    
    const dados = {email,senha};
    console.log(dados);
    router.push("/home");
  }

  function criarConta(e) {
    e.preventDefault();

    if (!email || !senha || !nome) {
      setErro("Campos Inválidos");
      return;
    }

    const dados = {email,senha,nome};
    console.log(dados);
    router.push("/home");
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.conteinerLogin}>
          <div className={styles.contentHeader}>
            <SnowflakeIcon size={40} stroke="#131111" />
            <h1 className={styles.titulo}>
              {modo === "login" ? <span>Olá de novo</span> : <span>Bem vindo !</span>}
            </h1>
          </div>
          <div className={styles.bodyLogin}>
            {modo === "login" ?
              <form onSubmit={entrarLogin}>
                <label className="label" htmlFor="email">E-mail</label>
                <div className={styles.inputContent}>
                  <AtSign size={19} />
                  <input className={styles.input} type="email" name="email" id="email" placeholder="SuaConta@gmail.com"
                    required
                    minLength={8}
                    maxLength={25}
                    value={email}
                    onChange={lerEmail} />
                </div>
                <label className="label" htmlFor="senha">Senha</label>
                <div className={styles.inputContent}>
                  <LockKeyhole size={19} />
                  <input className={styles.input} type="password" name="senha" id="senha" placeholder="Digite aqui"
                    required
                    minLength={3}
                    maxLength={12}
                    value={senha}
                    onChange={lerSenha} />
                </div>
                <div className={styles.rowCad}>
                  <p onClick={() => setModo("cadastro")}
                  >criar conta</p>
                </div>
                <div className={styles.rowBtn}>
                  <button className={styles.btnL}>Entrar</button>
                </div>
              </form>
              :
              <form onSubmit={criarConta}>
                <label className="label" htmlFor="nome">Nome</label>
                <div className={styles.inputContent}>
                  <User size={19} />
                  <input className={styles.input} type="text" name="nome" id="nome" placeholder="Digite aqui"
                    required
                    minLength={2}
                    maxLength={44}
                    value={nome}
                    onChange={lerNome} />
                </div>
                <label className="label" htmlFor="email">E-mail</label>
                <div className={styles.inputContent}>
                  <AtSign size={19} />
                  <input className={styles.input} type="email" name="email" id="email" placeholder="SuaConta@gmail.com"
                    required
                    minLength={8}
                    maxLength={25}
                    value={email}
                    onChange={lerEmail} />
                </div>
                <label className="label" htmlFor="senha">Senha</label>
                <div className={styles.inputContent}>
                  <LockKeyhole size={19} />
                  <input className={styles.input} type="password" name="senha" id="senha" placeholder="Digite aqui"
                    required
                    minLength={3}
                    maxLength={12}
                    value={senha}
                    onChange={lerSenha} />
                </div>
                <div className={styles.rowCad}>
                  <p onClick={() => setModo("login")}
                  >Já tem uma conta ?</p>
                </div>
                <div className={styles.rowBtn}>
                  <button className={styles.btnL}>Criar</button>
                </div>
              </form>
            }

            {msgErro != "" && <p>{msgErro}</p>}
          </div>
        </div>
      </main>
    </>
  );
}
