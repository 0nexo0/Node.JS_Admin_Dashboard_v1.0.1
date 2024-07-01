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
    await db.execute(`CALL c_insertBookings(?,?,?,?,?,?,?,?,?,?,?)`, [
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
    ]);
    res.redirect("http://127.0.0.1:5500/contact.html");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { insertBookings };
