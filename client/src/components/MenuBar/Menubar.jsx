import React from "react";

export const Menubar = () => {
  return (
    <div className="menu-bar max-w-[393px] md:max-w-full overflow-hidden h-[231px] md:h-[311px] md:ms-[150px] flex justify-center items-center md:items-end">
      <span className="flex flex-col items-center text-center  md:mb-5 md:me-40">
        <span
          className="text-[40px] md:text-[75px] font-semibold font-oswald text-[#FFFFFF]
            
            
            drop-shadow-[3px_3px_0_rgba(139,0,0,1)]
           "
        >
          MENU
        </span>
        <span className="text-[16px] md:text-[18px] font-normal font-kelly text-[#FFFFFF]">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to
        </span>
        <span className="text-[16px] md:text-[18px] font-kelly font-normal text-[#FFFFFF]">
          place an order, use the "Order Online" button located below the menu.
        </span>
      </span>
    </div>
  );
};
