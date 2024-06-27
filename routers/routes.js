import express from "express";
import {
  fetchBlogs,
  fetchBookings,
  fetchComments,
  fetchMembers,
} from "../controllers/fetchDataApiController.js";
import { insertMembers } from "../controllers/insertMembersApiController.js";

const route = express.Router();

//Dashboard Data Fetch Api Routes
route.get("/members", fetchMembers);
route.get("/bookings", fetchBookings);
route.get("/comments", fetchComments);
route.get("/blogs", fetchBlogs);

//Insert Members Api Route
route.post("/insertmembers", insertMembers);

export default route;
