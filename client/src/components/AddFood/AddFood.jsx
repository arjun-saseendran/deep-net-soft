import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const AddFood = () => {
  const { id } = useParams();
  const [foodData, setFoodData] = useState({
    itemName: "",
    description: "",
    price: 0,
  });

  const baseURL = import.meta.env.VITE_API_URL;
  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };
  const addFood = () => {
    axios
      .post(`${baseURL}/food/add-food/${id}`, foodData)
      .then(() => {
        console.log("Food data added to database successfully");
        setFoodData({ itemName: "", description: "", price: 0 });
      })
      .catch((error) => console.log("Error adding food:", error));
  };

  return (
    <div className="bg-black mt-20">
      <div className="flex flex-col items-center p-20 gap-4 justify-center border ">
        <h1 className=" text-white text-[16px] font-oswald">ADD FOOD</h1>
        <div>
          <input
            className="rounded-xl p-5"
            type="text"
            name="itemName"
            id="itemName"
            placeholder="Type food name"
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            className="rounded-xl p-5"
            type="text"
            name="description"
            id="description"
            placeholder="Type description"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            className="rounded-xl p-5"
            type="number"
            name="price"
            id="price"
            placeholder="Enter the price"
          />
        </div>
        <div className="border px-5 py-2 cursor-pointer hover:bg-[#0796EF]">
          <button
            onClick={addFood}
            className=" text-white text-[16px] font-oswald"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
