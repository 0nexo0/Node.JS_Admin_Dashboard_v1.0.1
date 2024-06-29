import express from "express";
import {
  fetchBlogs,
  fetchBlogsOverviewDetails,
  fetchBookings,
  fetchBookingsCount,
  fetchComments,
  fetchCommentsCount,
  fetchMembers,
  fetchMembersDetails,
  fetchMembersDetailsById,
} from "../controllers/fetchDataApiController.js";
import { insertMembers } from "../controllers/insertMembersApiController.js";
import { deleteMembers } from "../controllers/delUserApiController.js";
import { insertBlogsOverview } from "../controllers/insertBlogsOvrviewApi.js";
import { delBlogOverviews } from "../controllers/delBlogOverviews.js";
import { delComments } from "../controllers/delCommentsApiController.js";
import { insertBookings } from "../controllers/insertBookingsApiController.js";
import { updateBstatus } from "../controllers/updateBookingsStatusApiController.js";
import sendMail from "../controllers/sendMailApiController.js";

const route = express.Router();

//Dashboard Data Fetch API Routes
route.get("/members", fetchMembers);
route.get("/bookingsCount", fetchBookingsCount);
route.get("/commentscount", fetchCommentsCount);
route.get("/blogs", fetchBlogs);

//Insert Members API Route
route.post("/insertmembers", insertMembers);

//Delete Members API Route
route.post("/deletemembers", deleteMembers);

//Fetch Team Member Details API Route
route.get("/memberdetails/:id", fetchMembersDetailsById);

//Fetch Team Members Details API Route
route.get("/membersdetails", fetchMembersDetails);

//Insert Blogs Overview Details API Route
route.post("/insertblogsoverview", insertBlogsOverview);

//Fetch Blog Overviews Details API Route
route.get("/blogoverviewdetails", fetchBlogsOverviewDetails);

//Delete Blog Overviews API Route
route.post("/delblogoverviews", delBlogOverviews);

//Fetch Comments API Route
route.get("/comments", fetchComments);

//Delete Comments API Rout
route.post("/delcomments", delComments);

//Manage Bookings API Route
route.get("/managebookings", fetchBookings);

//Insert Bookings API Route
route.post("/insertbookings", insertBookings);

//Update Bookings Status API Route
route.post("/updatestatus", updateBstatus);

//Send Email API Rout
route.post("/sendmail", sendMail);
export default route;
