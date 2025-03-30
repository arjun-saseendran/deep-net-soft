import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    menuId: [{ type: Schema.Types.ObjectId, ref: "Menu", required: true }],
  },
  { timestamps: true },
);

export const Food = model("Food", foodSchema);
