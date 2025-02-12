import express from "express";
import { getHeroes } from "../controllers/heroesController.js";

const router = express.Router();

router.get("/", getHeroes);

export default router;
