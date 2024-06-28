import dbConnect from "../database/database.js";
import { upload } from "../libs/multerConfig.js";

const connection = dbConnect();

const insertBlogsOverview = (req, res) => {
  const uploadSingle = upload.single("image");

  uploadSingle(req, res, async (error) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }

    const { title, author, date } = req.body;
    const imgurl = req.imgurl || null;
    console.log(imgurl);

    try {
      const db = connection;
      const [response] = await db.execute(
        `CALL c_insertBlogsOverview(?,?,?,?)`,
        [title, author, date, imgurl || null]
      );
      res.status(200).json({ success: "upload success", response: response });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

export { insertBlogsOverview };
