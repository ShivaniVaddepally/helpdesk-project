import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ["Admin", "Agent", "User"] }
});

export default mongoose.model("User", userSchema);
