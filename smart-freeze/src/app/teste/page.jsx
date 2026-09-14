import { db } from '@/lib/db';

async function getDadosDoBanco() {
  try {
    // Consulta buscando o usuário junto com suas geladeiras e alimentos cadastrados
    const [usuarios] = await db.query('SELECT id, usuario FROM usuario');

    const [geladeiras] = await db.query(`
      SELECT g.*, u.usuario as dono 
      FROM geladeira g 
      LEFT JOIN usuario u ON g.uid = u.id
    `);

    const [alimentos] = await db.query(`
      SELECT a.*, g.nome as conteiner 
      FROM alimentos a 
      LEFT JOIN geladeira g ON a.uid = g.id
    `);

    return { usuarios, geladeiras, alimentos, erro: null };
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
    return { usuarios: [], geladeiras: [], alimentos: [], erro: error.message };
  }
}

export default async function TestePage() {
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
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0070f3' }}>🧊 Smart Freeze - Teste de Conexão</h1>
      <p style={{ color: 'green', fontWeight: 'bold' }}>✅ Conexão estabelecida com sucesso com o banco freeze_Banco!</p>

      <hr style={{ margin: '20px 0' }} />

      <h2>👤 Usuários ({usuarios.length})</h2>
      {usuarios.length === 0 ? (
        <p style={{ color: '#666' }}>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>ID: {u.id} | Usuário: <strong>{u.usuario}</strong></li>
          ))}
        </ul>
      )}

      <h2>❄️ Geladeiras ({geladeiras.length})</h2>
      {geladeiras.length === 0 ? (
        <p style={{ color: '#666' }}>Nenhuma geladeira cadastrada.</p>
      ) : (
        <ul>
          {geladeiras.map((g) => (
            <li key={g.id}>
              <strong>{g.nome}</strong> ({g.marca}) - Pertence a: {g.dono || 'Sem dono'} | Status:{' '}
              {g.situacao ? 'Ligada' : 'Desligada'}
            </li>
          ))}
        </ul>
      )}

      <h2>🍎 Alimentos ({alimentos.length})</h2>
      {alimentos.length === 0 ? (
        <p style={{ color: '#666' }}>Nenhum alimento cadastrado.</p>
      ) : (
        <ul>
          {alimentos.map((a) => (
            <li key={a.id}>
              <strong>{a.nome}</strong> - Qtd: {a.quantidade} | Categoria: {a.categoria} | Pertence a:{' '}
              {a.conteiner || 'Sem geladeira'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}