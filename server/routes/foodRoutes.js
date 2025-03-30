import { Router } from "express";
import { addFood } from "../controllers/foodControllers.js";

// Configure router
export const foodRouter = Router();

// Add food
foodRouter.post("/add-food/:id", addFood);
