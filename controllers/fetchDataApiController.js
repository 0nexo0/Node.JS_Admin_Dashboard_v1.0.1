import dbConnect from "../database/database.js";

const fetchMembers = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectTeamMemberCount()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const fetchBookingsCount = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectBookingsCount()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const fetchCommentsCount = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectCommentsCount()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const fetchBlogs = async (req, res, next) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectBlogsCount()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchMembersDetails = async (req, res, next) => {
  const connection = dbConnect();
  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectTeamMembersDetails()`);

    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const fetchMembersDetailsById = async (req, res, next) => {
  const connection = dbConnect();
  const { id } = req.params;
  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectTeamMembersDetailsById(?)`, [id]);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchBlogsOverviewDetails = async (req, res) => {
  const connection = dbConnect();

  try {
    const [rows] = await connection
      .promise()
      .query(`CALL c_selectBlogsOverviewDetails()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchComments = async (req, res) => {
  const connection = dbConnect();
  try {
    const [rows] = await connection.promise().query(`CALL c_selectComments()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchBookings = async (req, res) => {
  const connection = dbConnect();
  try {
    const [rows] = await connection.promise().query(`CALL c_manageBookings()`);
    const response = rows[0];
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  fetchMembers,
  fetchBookingsCount,
  fetchCommentsCount,
  fetchBlogs,
  fetchMembersDetails,
  fetchMembersDetailsById,
  fetchBlogsOverviewDetails,
  fetchComments,
  fetchBookings,
};
