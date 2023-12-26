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
  res.send("Facebook Clone Backend Api Is Connected Successfully");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  DbConnection();
  console.log(`Server is running on Port: ${PORT}`);
});
