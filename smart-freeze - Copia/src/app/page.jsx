import CardDesktop from "@/components/CardDesktop";
import styles from "./page.module.scss";
import Card from "@/components/Card";
import CardAdd from "@/components/CardAdd";
import { getDadosDoBanco } from '@/lib/db';


export default async function Home() {
  const { usuarios, geladeiras, alimentos, erro } = await getDadosDoBanco();

  if (erro) {
    return (
      <div style={{ padding: '20px', color: 'red', fontFamily: 'sans-serif' }}>
        <h1>❌ Erro ao conectar ao MySQL Workbench</h1>
        <p><strong>Detalhes:</strong> {erro}</p>
        <p>Verifique se o MySQL está rodando e se as credenciais do <code>.env.local</code> estão corretas.</p>
      </div>
    );
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.tituloFiltro}>
          {usuarios.map((u) => (
            <p key={u.id}>Bem vindo, <span>{u.usuario}</span></p>
          ))}
        </div>
      
        <div className={styles.filtro}>
          <p className={styles.filtroText}>Filtrar Por:</p>
          <ul>
            <li>Laticínios</li>
            <li>Frutas</li>
            <li>Carnes</li>
            <li>Bebidas</li>
            <li>Outros</li>
          </ul>
        </div>

        <section className={styles.section}>
          {alimentos.map((a) => (a.uid === geladeiras[0].id ? (
            <Card key={a.id} alimento={a} />
          ) : null ))}
          <CardAdd />
        </section>
      </main>
    </>
  );
}
