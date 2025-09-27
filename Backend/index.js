import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./src/database/connectDB.database.js";
import { server } from "./app.js";

// Connect DB and start server
connectDb()
  .then(() => {
    server.listen(process.env.PORT || 3000, () => {
      console.log(
        `✅ Server running on http://localhost:${process.env.PORT || 3000}`
      );
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB:", err);
  });
