import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import kbRoutes from "./routes/kb.js";
import configRoutes from "./routes/config.js";
import agentRoutes from "./routes/agent.js";
import ticketRoutes from "./routes/tickets.js";

import { errorHandler } from "./middleware/errors.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/kb", kbRoutes);
app.use("/api/config", configRoutes);
app.use("/api/agent", agentRoutes);
app.use("/api/tickets", ticketRoutes);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/helpdesk")
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
