import express from "express";
import cors from "cors";
import heroesRoutes from "./routes/heroesRoutes.js";
import errorHandler from "./middleware/errorHandler.js"; 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/heroes", heroesRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
