import { getConnection } from "../database.js";

export const getHeroes = async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query("SELECT * FROM heroes");
    connection.release(); 

    if (!rows.length) {
      return res.status(404).json({ error: "No heroes found" });
    }

    res.json(rows);
  } catch (error) {
    console.error("❌ Error fetching heroes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
