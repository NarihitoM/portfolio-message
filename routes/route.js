import { fetchuser, getuser } from "../controllers/usercontroller.js";
import cors from "cors";
import express from "express";
import { Router } from "express";

const router = express.Router();


router.post("/api/senduser", getuser);
router.get("/api/fetchuser",fetchuser);
export default router;


