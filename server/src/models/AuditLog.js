import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  action: String,
  user: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("AuditLog", auditSchema);
