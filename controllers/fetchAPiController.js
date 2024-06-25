import dbConnect from "../database/database.js";

const getMembers = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection.promise().query(`CALL select_members()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getBookings = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL eu_select_bookings()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getComments = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL eu_select_Comments()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getBlogs = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection.promise().query(`CALL getBlogs()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getMembers, getBookings, getComments, getBlogs };
