import dbConnect from "../database/database.js";

const connection = dbConnect();

const deleteMembers = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Request Body:", req.body);
  const { id } = req.body;
  console.log(id);
  try {
    const response = await connection
      .promise()
      .query(`CALL c_deleteMembers (?)`, [id]);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { deleteMembers };
