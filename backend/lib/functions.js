import { db } from './db.js';

function normalizarDataMySQL(valor) {
  if (!valor) return valor;
  const texto = String(valor).trim();
  return texto.includes("T") ? texto.split("T")[0] : texto;
}

export async function filterCategory(categoria) {
    try {
        const [alimentosFiltrados] = await db.query(`
            SELECT a.* 
            FROM alimentos a 
            WHERE a.categoria = ?
        `, [categoria]);
        return alimentosFiltrados;
    } catch (error) {
        console.error('Erro ao filtrar alimentos por categoria:', error);
        throw error;
    }
}

export async function getDadosDoBanco(req, res, next) {
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

    res.json({ usuarios, geladeiras, alimentos });
  } catch (error) {
    res.status(500).json({ usuarios: [], geladeiras: [], alimentos: [], erro: error.message });
  }
}
export async function listAlimentos(req, res, next) {
  try {
  
    const [alimentos] = await db.query(`
      SELECT a.*, g.nome as conteiner 
      FROM alimentos a 
      LEFT JOIN geladeira g ON a.uid = g.id 
      WHERE g.id = ?
    `,[req]);

    res.json({ alimentos });
  } catch (error) {
    res.status(500).json({ alimentos: [], erro: error.message });
  }
}
export async function listGeladeira(req, res, next) {
  try {
    const [usuarios] = await db.query('SELECT id, usuario FROM usuario where id = ?', [2]); //where id = 1 é placeholder para teste, remova ou modifique conforme necessário.

  
    const [geladeiras] = await db.query(`
      SELECT g.*, u.usuario as dono 
      FROM geladeira g 
      LEFT JOIN usuario u ON g.uid = u.id
      ` //where usuarios[0].id é placeholder para teste, remova conforme necessário.
    );

    res.json({ geladeiras });
  } catch (error) {
    res.status(500).json({ geladeiras: [], erro: error.message });
  }
}
export async function addAlimentos(req, res, next) {
  try {
    const { uid, nome, categoria, marca , quantidade } = req.body;

    const sql =
      "INSERT INTO alimentos ( id, uid, nome, categoria, marca, quantidade) values ( default, ?, ?, ?, ?, ?)";
    const valores = [uid, nome, validade, categoria, marca, quantidade];
    const [resultados] = await db.query(sql, valores); // uso valores, qnd vou enviar os dados ? no banco
    res.json({
      mensagem: "Produto criado com sucesso",
      resultado: resultados.insertId,
    });
  } catch (e) {
    next(e);
  }
}
export async function addGeladeira(req, res, next) {
  try {
    const { uid, nome, situacao, temperatura, marca, quantidade,manutencao } = req.body;
    const manutencaoNormalizada = normalizarDataMySQL(manutencao);

    const sql =
      "INSERT INTO geladeira ( id, uid, nome, situacao, temperatura, marca, quantidade, manutencao) values ( default, ?, ?, ?, ?, ?, ?, ?)";
    const valores = [uid, nome, situacao, temperatura, marca, quantidade, manutencaoNormalizada];
    const [resultados] = await db.query(sql, valores); // uso valores, qnd vou enviar os dados ? no banco
    res.json({
      mensagem: "Geladeira criada com sucesso",
      resultado: resultados.insertId,
    });
  } catch (e) {
    next(e);
  }
}
export async function atualizarProduto(req, res, next) {
  try {
    const id = Number(req.params.id);
    const { nome, categoria, marca , quantidade } = req.body;
    const sql = `UPDATE alimentos 
    SET nome = ?, categoria = ?, marca = ?, quantidade = ?
    WHERE id = ?`;
    const valores = [nome, categoria, marca, quantidade, id];
    const [resultados] = await db.query(sql, valores);
    res.json({
      mensagem: "Produto atualizado com sucesso",
    });
  } catch (e) {
    next(e);
  }
}

export async function atualizarGeladeira(req, res, next) {
  try {
    const id = Number(req.params.id);
    const { nome, situacao, temperatura, marca, quantidade, manutencao } = req.body;
    const manutencaoNormalizada = normalizarDataMySQL(manutencao);
    const sql = `UPDATE geladeira 
    SET nome = ?, situacao = ?, temperatura = ?, marca = ?, quantidade = ?, manutencao = ?
    WHERE id = ?`;
    const valores = [nome, situacao, temperatura, marca, quantidade, manutencaoNormalizada, id];
    const [resultados] = await db.query(sql, valores);
    res.json({
      mensagem: "Geladeira atualizada com sucesso",
    });
  } catch (e) {
    next(e);
  }
}

export async function deletarProduto(req, res, next) {
  try {
    const id = Number(req.params.id);
    const sql = `DELETE FROM alimentos
  WHERE id = ?`;

    if (
      !Number.isInteger(id) ||
      id < 0 ||
      !Number.isFinite(id) ||
      id === undefined ||
      typeof id !== "number"
    ) {
      return res.status(404).json({ mensagem: "Id inválido" });
    }

    const [resultado] = await db.query(sql, id);
    res.json({
      mensagem: "Produto removido com sucesso",
    });
  } catch (e) {
    next(e);
  }
}
export async function deletarGeladeira(req, res, next) {
  try {
    const id = Number(req.params.id);
    const sql = `DELETE FROM geladeira
  WHERE id = ?`;

    if (
      !Number.isInteger(id) ||
      id < 0 ||
      !Number.isFinite(id) ||
      id === undefined ||
      typeof id !== "number"
    ) {
      return res.status(404).json({ mensagem: "Id inválido" });
    }

    const [resultado] = await db.query(sql, id);
    res.json({
      mensagem: "Geladeira removida com sucesso",
    });
  } catch (e) {
    next(e);
  }
}
export async function getUserByEmail(email) {
  try {
    const [rows] = await db.query('SELECT id, usuario, email, senha FROM usuario WHERE email = ?', [email]);
    return rows[0] || null;
  } catch (error) {
    console.error('Erro ao buscar usuário por email:', error);
    return null;
  }
}

export async function authenticateUserByEmail(email, senha) {
  try {
    const user = await getUserByEmail(email);
    if (!user) return null;
    // Atenção: compara senha em texto simples. Trocar por hash em produção.
    if (user.senha === senha) {
      return { id: user.id, usuario: user.usuario };
    }
    return null;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    return null;
  }
}