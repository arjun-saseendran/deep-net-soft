import React from "react";

export const ButtonBar = () => {
  const menus = [{ title: "FOOD" }, { title: "DRINKS" }, { title: "BRUNCH" }];
  return (
    <div className="btn-bar w-full h-[79px] mt-10">
      <div >
        <ul className="flex justify-center  w-full h-[79px] items-center gap-5">
          {menus.map((menu, index) => (
            <li key={index}>
              <button className="text-white font-semibold font-oswald bg-black w-16 md:w-[114.25px] h-[49.98px] border-[0.5px] border-[#0796EF] hover:border-2">{menu.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
