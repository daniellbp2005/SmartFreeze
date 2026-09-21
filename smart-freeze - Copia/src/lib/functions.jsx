import { db } from './db';
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