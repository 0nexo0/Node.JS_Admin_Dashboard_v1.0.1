import dbConnect from "../database/database.js";

const insertBookings = async (req, res) => {
  const connection = dbConnect();
  const {
    name,
    phone_number,
    email,
    members,
    numOfChild,
    newm,
    chkIn,
    chkOut,
    acco,
    pkg,
    message,
  } = req.body;
  try {
    const db = connection;
    const [response] = db.execute(
      `CALL c_insertBookings(?,?,?,?,?,?,?,?,?,?,?)`,
      [
        name,
        phone_number,
        email,
        members,
        numOfChild,
        newm,
        chkIn,
        chkOut,
        acco,
        pkg,
        message,
      ]
    );
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { insertBookings };
