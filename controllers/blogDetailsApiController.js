// Import dbConnect function from database.js
import dbConnect from "../database/database.js";

// Define the blogDetails function to handle GET requests
const blogDetails = async (req, res) => {
  // Extract pageNum and pageSize from query parameters
  const { pageNum, pageSize } = req.query;

  // Establish database connection
  const connection = dbConnect();

  try {
    // Call the stored procedure with pageNum and pageSize
    const [rows] = await connection
      .promise()
      .query("CALL c_blogDetails(?, ?)", [pageNum, pageSize]);

    // Send the response as JSON
    res.status(200).json(rows[0]);
  } catch (error) {
    // Handle any errors
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  } finally {
    // Close the database connection
    connection.end();
  }
};

export default blogDetails;
