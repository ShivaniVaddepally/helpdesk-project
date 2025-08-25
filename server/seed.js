import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/User.js";
import Article from "./src/models/Article.js";
import { users, articles } from "./seedData.js";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/helpdesk");
  console.log("✅ MongoDB connected");

  await User.deleteMany({});
  await Article.deleteMany({});

  await User.insertMany(users);
  await Article.insertMany(articles);

  console.log("🌱 Seed data inserted");
  mongoose.connection.close();
}

seed();
