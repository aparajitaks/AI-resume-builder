import express from "express";
import { createResume, getResumes } from "../controllers/resume.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getResumes);

export default router;
