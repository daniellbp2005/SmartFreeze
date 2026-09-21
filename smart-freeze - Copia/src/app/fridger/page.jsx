import Link from "next/link";
import styles from "./fridger.module.scss";
import Geladeira from "@/components/Geladeira";
import CardAdd from "@/components/CardAdd"
import { getDadosDoBanco } from '@/lib/db';

export default async function Fridger() {
    const { usuarios, geladeiras, erro } = await getDadosDoBanco();

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
                <div className={styles.tituloFiltro}> Geladeiras</div>
                <section className={styles.section}>
                    {geladeiras.map((g) => (g.uid === usuarios[0].id ? (
                            <Link href={'/'}>
                                <Geladeira key={g.id} geladeira={g} />
                            </Link>
                        ) : null ))}    
                    <CardAdd />
                </section>
            </main>
        </>
    );
}