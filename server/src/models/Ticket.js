import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  subject: String,
  description: String,
  status: { type: String, enum: ["Open", "Closed"], default: "Open" },
  createdBy: String,
  assignedTo: String
});

export default mongoose.model("Ticket", ticketSchema);
