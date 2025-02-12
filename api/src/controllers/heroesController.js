import { getConnection } from "../database.js";

export const getHeroes = async (req, res, next) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query("SELECT * FROM heroes");
    connection.release();

    if (!rows.length) {
      const error = new Error("No heroes found");
      error.status = 404;
      return next(error);
    }

    res.json({ success: true, data: rows });
  } catch (error) {
    error.status = 500;
    error.message = "Error fetching heroes";
    return next(error);
  }
};
