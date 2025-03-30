import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  const [navBtnOpen, setNavBtnOpen] = useState(false);
  return (
    <nav className="bg-[#121618] h-[40px] md:h-[100px] w-full">
      <div className=" w-full flex justify-end items-end h-full">
        <div className="flex justify-between">
          <div></div>
          <div className="pb-3 pe-4 pt-3 xl:hidden">
            <IoMenu
              onClick={() => setNavBtnOpen(!navBtnOpen)}
              className="text-white md:h-20 md:w-24"
            />
          </div>
        </div>
        <div
          className={` absolute top-[30px] z-10 rounded-xl md:top-[100px] p-4 xl:p-0  bg-[#121618] xl:static xl:flex  xl:justify-end ${
            navBtnOpen ? "flex" : "hidden"
          }`}
        >
          <ul className=" text-white text-[16px] font-oswald flex flex-col xl:flex-row  items-center justify-center mb-4 xl:pe-[150px] gap-6">
            <li>
              <a href="#"></a>HOME
            </li>
            <li>
              <a href="#">MENU</a>
            </li>
            <li>
              <a href="#">MAKE A RESERVATION</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
