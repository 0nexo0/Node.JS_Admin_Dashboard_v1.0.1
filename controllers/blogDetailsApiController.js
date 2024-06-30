import dbConnect from "../database/database.js";

const blogDetails = async (req, res) => {
  const connection = dbConnect();
  try {
    const [rows] = await connection.promise().query(`CALL c_blogDetails()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default blogDetails;
