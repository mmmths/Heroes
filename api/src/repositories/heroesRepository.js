import { getConnection } from "../database.js";

//Repository Layer (Repository Pattern)
// lógica do banco
class HeroesRepository {
    async getAll() {
        const connection = await getConnection();
        const [rows] = await connection.query("SELECT * FROM heroes");
        connection.release();
        return rows;
    }
}

export default new HeroesRepository();
