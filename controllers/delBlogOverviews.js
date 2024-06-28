import dbConnect from "../database/database.js";

const delBlogOverviews = async (req, res) => {
  const connection = dbConnect();
  const { id } = req.body;

  try {
    const db = connection;
    const [response] = await db.execute(`CALL c_deleteBlogOverviews(?)`, [id]);
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { delBlogOverviews };
