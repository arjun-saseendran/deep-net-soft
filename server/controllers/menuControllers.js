import { catchErrorHandler } from "../utils/catchErrorHandler.js";
import { Menu } from "../models/menuModel.js";
import { Food } from "../models/foodModel.js";

// Add menu
export const addMenu = async (req, res) => {
  try {
    // Get data from request body
    const { menuName, description } = req.body;

    // Handle input fields not to be empty
    if (!menuName || !description) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Creating new menu object
    const menu = new Menu({
      menuName,
      description,
    });

    // Save new menu to database
    await menu.save();

    // Send response to frontend
    res.json({ message: "Menu created successfully", data: menu });
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};

// Display menus
export const displayMenu = async (req, res) => {
  try {
    // Menus
    const menus = await Menu.find();

    // Send menu to front
    res
      .status(200)
      .json({ message: "Menus fetched successfully", data: menus });
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};

// Get one menu
export const getMenuById = async (req, res) => {
  try {
    const menuId = req.params.id;

    // Menus
    const menu = await Menu.findById(menuId);

    // Send menu to front
    res.status(200).json({ message: "Menu fetched successfully", data: menu });
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};

// Get menu's food items
export const getMenuFoodItems = async (req, res) => {
  try {
    // Get menu id
    const menuId = await Menu.findById(req.params.id);

    // Handle menu not found
    if (!menuId) return res.status(404).json({ message: "Menu not found" });

    // Fetch all food items of menu
    const foodItems = await Food.find({ menuId });

    res.status(200).json({
      message: "Menu's food items fetched sucessfully",
      data: foodItems,
    });
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};
