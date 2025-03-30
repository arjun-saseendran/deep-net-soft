import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const AddMenu = () => {
  const [menuData, setMenuData] = useState({ menuName: "", description: "" });
  const baseURL = import.meta.env.VITE_API_URL;
  const handleChange = (e) => {
    setMenuData({ ...menuData, [e.target.name]: e.target.value });
  };
  const createMenu = () => {
    axios
      .post(`${baseURL}/menu/add-menu`, menuData)
      .then(() => {
        console.log("Menu data added to database successfully");
        setMenuData({ menuName: "", description: "" });
      })
      .catch((error) => console.log("Error adding menu:", error));
  };

  return (
    <div className="bg-black mt-20">
      <div className="flex flex-col items-center p-20 gap-4 justify-center border">
        <h1 className=" text-white text-[16px] font-oswald">ADD MENU</h1>
        <div>
          <input
            className="rounded-xl p-5"
            type="text"
            name="menuName"
            id="menuName"
            placeholder="Type menu name"
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            className="rounded-xl p-5"
            type="text"
            name="description"
            id="description"
            placeholder="Type menu name"
            onChange={handleChange}
          />
        </div>
        <div className="border px-5 py-2 cursor-pointer hover:bg-[#0796EF]">
          <button
            onClick={createMenu}
            className=" text-white text-[16px] font-oswald"
          >
            SUBMIT
          </button>
        </div>
        <div className="border px-5 py-2 cursor-pointer hover:bg-[#0796EF]">
        <Link className="text-white" to={`/admin/list-menus`}>MENUS</Link>
        </div>
      </div>
    </div>
  );
};
