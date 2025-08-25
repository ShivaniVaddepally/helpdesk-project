import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

router.post("/", async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.json(article);
});

export default router;
