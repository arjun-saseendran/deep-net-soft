import { Router } from "express";
import { addMenu, displayMenu, getMenuById, getMenuFoodItems } from "../controllers/menuControllers.js";

// Configure router
export const menuRouter = Router();

// Add menu
menuRouter.post("/add-menu", addMenu);

// Display menu's foods
menuRouter.get("/get-menu-foods/:id", getMenuFoodItems);

// Display menu's 
menuRouter.get("/get-menus", displayMenu);

// Display one menus 
menuRouter.get("/get-menu-by-id/:id", getMenuById);
