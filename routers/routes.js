import express from "express";
import {
  fetchBlogs,
  fetchBookings,
  fetchComments,
  fetchMembers,
  fetchMembersDetails,
  fetchMembersDetailsById,
} from "../controllers/fetchDataApiController.js";
import { insertMembers } from "../controllers/insertMembersApiController.js";
import { deleteMembers } from "../controllers/delUserApiController.js";

const route = express.Router();

//Dashboard Data Fetch Api Routes
route.get("/members", fetchMembers);
route.get("/bookings", fetchBookings);
route.get("/comments", fetchComments);
route.get("/blogs", fetchBlogs);

//Insert Members Api Route
route.post("/insertmembers", insertMembers);

//Delete Members Api Route
route.post("/deletemembers", deleteMembers);

//Fetch Team Member Details Api Route
route.get("/memberdetails/:id", fetchMembersDetailsById);

//Fetch Team Members Details Api Route
route.get("/membersdetails", fetchMembersDetails);
export default route;
