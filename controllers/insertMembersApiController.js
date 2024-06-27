import dbConnect from "../database/database.js";
import { upload } from "../libs/multerConfig.js";

const connection = dbConnect;

const insertMembers = async (req, res) => {
  const uploadSingle = upload.single("image");

  uploadSingle(req, res, async (error) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    const {
      name,
      position,
      facebooklink,
      twitterlink,
      linkedinlink,
      whatsappnumber,
    } = req.body;
    const imgurl = req.imgurl || null;

    try {
      const db = req.app.locals.db;
      const [response] = await db.execute(
        `CALL c_insertMembers(?,?,?,?,?,?,?)`,
        [
          name,
          position,
          facebooklink,
          twitterlink,
          linkedinlink,
          whatsappnumber,
          imgurl,
        ]
      );
      res.send("Upload Success");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

export { insertMembers };
