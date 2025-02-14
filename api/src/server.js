import app from "./app.js";
import { connectDB } from "./database.js";

const PORT = process.env.PORT || 4000;
const HOST = "0.0.0.0"; 

connectDB().then(() => {
  app.listen(PORT, HOST, () => console.log(`✅ Server  is running on port ${PORT}`));
});
