import mysql from 'mysql2/promise';



export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function getDadosDoBanco() {
  try {
    // Consulta buscando o usuário junto com suas geladeiras e alimentos cadastrados
    const [usuarios] = await db.query('SELECT id, usuario FROM usuario where id = ?', [1]); //where id = 1 é placeholder para teste, remova ou modifique conforme necessário.

    const [geladeiras] = await db.query(`
      SELECT g.*, u.usuario as dono 
      FROM geladeira g 
      LEFT JOIN usuario u ON g.uid = u.id
      where g.uid = ?`, [usuarios[0].id] //where usuarios[0].id é placeholder para teste, remova conforme necessário.
    );

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