import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { log } from "node:console";
import dbConnect from "./database/database.js";
import route from "./routers/routes.js";

const app = express();
dotenv.config({ path: "./config.env" });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(join(__dirname, "public")));
app.use("/uploads", express.static("public/uploads"));
const PORT = process.env.PORT;

const Connect = async () => {
  try {
    const db = await dbConnect();
    app.locals.db = db;
    await app.listen(PORT, () => log(`Server is Running Port: ${PORT}`));
  } catch (error) {}
};

Connect();

app.use("/api/v2", route);
