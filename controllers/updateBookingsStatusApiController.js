import dbConnect from "../database/database.js";

const updateBstatus = async (req, res) => {
  const connection = dbConnect();
  const { id, sts } = req.body;
  try {
    const db = connection;
    const [response] = db.execute(`CALL c_updateBookingStatus(?,?)`, [id, sts]);
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { updateBstatus };
