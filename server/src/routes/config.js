import express from "express";
import Config from "../models/Config.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const configs = await Config.find();
  res.json(configs);
});

router.post("/", async (req, res) => {
  const config = new Config(req.body);
  await config.save();
  res.json(config);
});

export default router;
