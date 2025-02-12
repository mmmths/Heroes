import app from "./app.js";
import { connectDB } from "./database.js";

const PORT = process.env.PORT || 4000;


connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ Server  is running on port ${PORT}`));
});
