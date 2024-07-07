import dbConnect from "../database/database.js";

const connection = dbConnect();

const deleteMembers = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Request Body:", req.body);
  const { email } = req.body;
  try {
    const rows = await connection
      .promise()
      .query(`CALL c_getUserByEmail (?)`, [email]);

    const response = rows[0][0][0].nID;
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { deleteMembers };
