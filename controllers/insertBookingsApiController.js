import dbConnect from "../database/database.js";

const insertBookings = async (req, res) => {
  const connection = dbConnect();
  const {
    name,
    mnumber,
    email,
    adults,
    childs,
    newm,
    chkInDate,
    chkOutDate,
    acco,
    pkg,
    msg,
  } = req.body;
  try {
    const db = connection;
    const [response] = db.execute(
      `CALL c_insertBookings(?,?,?,?,?,?,?,?,?,?,?)`,
      [
        name,
        mnumber,
        email,
        adults,
        childs,
        newm,
        chkInDate,
        chkOutDate,
        acco,
        pkg,
        msg,
      ]
    );
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { insertBookings };
