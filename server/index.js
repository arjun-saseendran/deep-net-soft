import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import { foodRouter } from "./routes/foodRoutes.js";
import { menuRouter } from "./routes/menuRoutes.js";

// Configure .env
dotenv.config();

// Configure app
const app = express();

// Config cors
app.use(
  cors({
    origin: process.env.CORS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

// Configure port
const PORT = process.env.PORT;

// Connect database
connectDB();

// Common middlewares
app.use(express.json());

// Routes
app.use("/food", foodRouter);
app.use("/menu", menuRouter);

// Configure server
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server running on port ${process.env.PORT}`);
  }
});
