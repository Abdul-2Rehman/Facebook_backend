import express, { json } from "express";
import cors from "cors";
import "dotenv/config.js";
import DbConnection from "./config/mongoDb.js";
import login from "./routes/login.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", login);

app.get("/", (req, res) => {
  res.send("Hello, this is your API!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  DbConnection();
  console.log(`Server is running on Port: ${PORT}`);
});
