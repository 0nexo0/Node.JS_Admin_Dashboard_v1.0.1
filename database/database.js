import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

const dbConnect = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect(() => {
    console.log(`Mysql Database is Connected Port: ${process.env.DB_PORT}`);
  });
  return connection;
};

export default dbConnect;
