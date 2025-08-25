import mongoose from "mongoose";

const configSchema = new mongoose.Schema({
  key: String,
  value: String
});

export default mongoose.model("Config", configSchema);
