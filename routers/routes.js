import express from "express";
import {
  getBlogs,
  getBookings,
  getComments,
  getMembers,
} from "../controllers/fetchAPiController.js";

const route = express.Router();

route.get("/members", getMembers);
route.get("/bookings", getBookings);
route.get("/comments", getComments);
route.get("/blogs", getBlogs);

export default route;
