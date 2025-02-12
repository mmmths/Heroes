import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  console.error("❌ Missing database environment variables. Check your .env file.");
  process.exit(1);
}

// pool de conexões
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Função para obter uma conexão do pool
export const getConnection = async () => {
  try {
    return await pool.getConnection();
  } catch (error) {
    console.error("❌ Error getting database connection:", error);
    throw new Error("Database connection failed");

    // throw error;
  }
};

export { pool };
