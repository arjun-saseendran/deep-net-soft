import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListMenu = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/menu/get-menus`)
      .then((response) => {
        setMenus(response?.data?.data);
        
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }, []);

  return (
    <div className=" border h-96 w-96 mx-auto mt-10 h-full">
      <ul className="flex flex-col justify-center items-center h-96 w-96 gap-4">
        {menus.map((menu) => (
      <Link key={menu._id} to={`add-food/${menu._id}`}>
      <li className="text-white text-center border w-40 h-12 p-2" key={menu._id}>{menu.menuName}</li>
      </Link>    
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
