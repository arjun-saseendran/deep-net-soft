import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
export const Card = () => {
  const { menuId } = useSelector((state) => state.menuId);

  const [menuName, setMenuName] = useState({})

  const [foodData, setFoodData] = useState([]);

  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${baseURL}/menu/get-menu-foods/${menuId}`)
      .then((response) => {
        console.log("Food data fetched successfully");
        setFoodData(response?.data?.data);
        
      })
      .catch((error) => console.log("Error fetching food data:", error));
  }, [menuId]);
  
  useEffect(() => {
    axios
      .get(`${baseURL}/menu/get-menu-by-id/${menuId}`)
      .then((response) => {
        console.log("Menu data fetched successfully");
        setMenuName(response?.data?.data);
        
      })
      .catch((error) => console.log("Error fetching food data:", error));
  }, [menuId]);
console.log(menuName)
  return (
    <div className="h-full xl:h-[416px]  w-full border mt-10 mx-auto pb-96  md:pb-72 md:mt-20 xl:mt-[150px]">
      <div className="flex justify-center items-center gap-2 md:gap-4 mx-auto  ">
        <div>
          <span className="bg-[#857878] inline-block w-10 md:w-20 h-1 text-[50px] mt-12 "></span>
        </div>
        <div className="text-center mt-6  hidden md:block">
          <span className="drop-shadow-[3px_3px_0_rgba(139,0,0,1)] text-[#FFFFFF] text-[30px] md:text-[50px] font-semibold font-oswald">
            {menuName.menuName}
          </span>
        </div>

        {/* <div className="flex flex-col md:hidden mt-10">
          <div className="text-center md:hidden">
            <span className="drop-shadow-[3px_3px_0_rgba(139,0,0,1)] text-[#FFFFFF] text-[30px] md:text-[50px] font-semibold font-oswald">
              BRUNCH
            </span>
          </div>
          <div className="text-center md:hidden leading-none">
            <span className=" drop-shadow-[3px_3px_0_rgba(139,0,0,1)] text-[#FFFFFF] text-[30px] md:text-[50px] font-semibold font-oswald">
              COCKTAILS
            </span>
          </div>
        </div> */}
        <div>
          <span className="bg-[#857878] inline-block w-10 md:w-20 h-1 text-[50px] mt-12"></span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-5 md:p-20 gap-8">
        {foodData.map((food) => (
          <div key={food._id}>
            <h1 className="text-[26px] font-oswald text-[#FFFFFF]">
              {food.itemName}..........................{food.price}
            </h1>
            <p className="text-[18px], font-kelly text-[#857878]">
              {food.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
