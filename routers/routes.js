import express from "express";
import {
  fetchBlogs,
  fetchBlogsOverviewDetails,
  fetchBookings,
  fetchComments,
  fetchMembers,
  fetchMembersDetails,
  fetchMembersDetailsById,
} from "../controllers/fetchDataApiController.js";
import { insertMembers } from "../controllers/insertMembersApiController.js";
import { deleteMembers } from "../controllers/delUserApiController.js";
import { insertBlogsOverview } from "../controllers/insertBlogsOvrviewApi.js";
import { delBlogOverviews } from "../controllers/delBlogOverviews.js";

const route = express.Router();

//Dashboard Data Fetch API Routes
route.get("/members", fetchMembers);
route.get("/bookings", fetchBookings);
route.get("/comments", fetchComments);
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
export default route;
