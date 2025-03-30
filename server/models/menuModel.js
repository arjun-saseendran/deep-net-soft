import { Schema, model } from "mongoose";

const menuSchema = new Schema(
  {
    menuName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Menu = model("Menu", menuSchema);
