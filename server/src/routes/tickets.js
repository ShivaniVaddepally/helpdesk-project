import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

router.post("/", async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.json(ticket);
});

export default router;
