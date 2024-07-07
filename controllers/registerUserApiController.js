import { genSaltSync, hashSync } from "bcrypt";
import dotenv from "dotenv";
import dbConnect from "../database/database.js";
import jwt from "jsonwebtoken";

dotenv.config({ path: "../config.env" });

const SECRET_KEY = process.env.SECRET_KEY;

const registerUser = async (req, res, next) => {
  try {
    const db = dbConnect();
    const { name, email } = req.body;
    let { password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }
    const salt = genSaltSync(10);
    password = hashSync(password, salt);

    const user = db.execute(`CALL c_insertUser(?,?,?)`, [
      name,
      email,
      password,
    ]);

    const token = jwt.sign({ user: user }, SECRET_KEY, { expiresIn: "30m" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(Number(new Date()) + 30 * 60 * 1000),
    });
    res.json({ token: token });
    console.log(SECRET_KEY);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export { registerUser };
