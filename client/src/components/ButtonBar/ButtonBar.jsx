import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMenuId } from "../../redux/features/menuSlice";

export const ButtonBar = () => {
  const dispatch = useDispatch()
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
    <div className="btn-bar w-full h-[79px] mt-10">
      <div>
        <ul className="flex justify-center  w-full h-[79px] items-center gap-5">
          {menus.map((menu) => (
            <li key={menu._id}>
              <button onClick={()=> dispatch(setMenuId(menu._id))} className="text-white  font-semibold font-oswald bg-black w-16 md:w-[114.25px] h-[49.98px] border-[0.5px] border-[#0796EF] hover:border-2">
              {menu.menuName.toUpperCase()}

              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
