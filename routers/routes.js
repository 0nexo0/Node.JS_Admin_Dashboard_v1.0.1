import express from "express";
import {
  fetchBlogs,
  fetchBookings,
  fetchComments,
  fetchMembers,
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
export default route;
