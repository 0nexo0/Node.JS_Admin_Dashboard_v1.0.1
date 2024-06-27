import express from "express";
import {
  fetchBlogs,
  fetchBookings,
  fetchComments,
  fetchMembers,
} from "../controllers/fetchDataApiController.js";

const route = express.Router();

route.get("/members", fetchMembers);
route.get("/bookings", fetchBookings);
route.get("/comments", fetchComments);
route.get("/blogs", fetchBlogs);

export default route;
