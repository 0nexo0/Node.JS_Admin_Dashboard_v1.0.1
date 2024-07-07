import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import dbConnect from "../database/database.js";

dotenv.config({ path: "../config.env" });

const SECRET_KEY = process.env.SECRET_KEY;

const userLogin = async (req, res, next) => {
  try {
    const db = dbConnect();
    const { email, password } = req.body;

    const rows = await db
      .promise()
      .execute(`CALL c_getUserByEmail(?)`, [email]);
    const user = rows[0][0][0];

    if (!user) {
      return res.json({ message: "Invalid Email Or Password!2" });
    }

    const isValidPassword = compareSync(password, user.cPassword);
    if (isValidPassword) {
      user.password = undefined;
      const token = jwt.sign({ user: user }, SECRET_KEY, { expiresIn: "30m" });
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: new Date(Date.now() + 30 * 60 * 1000),
      });

      return res.json({ token: token, message: "hri" });
    } else {
      return res.json({ message: "Invalid Email Or Password!3" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

export { userLogin };
