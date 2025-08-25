import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
  ticketId: mongoose.Schema.Types.ObjectId,
  suggestion: String,
  confidence: Number
});

export default mongoose.model("AgentSuggestion", suggestionSchema);
