import { Food } from "../models/foodModel.js";
import { catchErrorHandler } from "../utils/catchErrorHandler.js";

// Add food
export const addFood = async (req, res) => {
  try {
    //Get menu id
    const  menuId  = req.params.id;
    // Get data from request body
    const { itemName, description, price } = req.body;

    // Handle input fields not to be empty
    if (!itemName || !description || !price) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Creating new food object
    const food = new Food({
      itemName,
      description,
      price,
      menuId,
    });

    // Save new food to database
    await food.save();

    // Send response to frontend
    res.json({ message: "Food created successfully", data: food });
  } catch (error) {
    // Handle catch error
    catchErrorHandler(res, error);
  }
};
