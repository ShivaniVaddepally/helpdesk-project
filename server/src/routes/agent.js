import express from "express";
import AgentSuggestion from "../models/AgentSuggestion.js";

const router = express.Router();

router.get("/:ticketId", async (req, res) => {
  const { ticketId } = req.params;
  const suggestion = await AgentSuggestion.findOne({ ticketId });
  if (!suggestion) return res.json({ suggestion: "No suggestion found" });
  res.json(suggestion);
});

export default router;
