import React from "react";

export const Card = () => {
  return (
    <div className="h-full xl:h-[416px]  w-full border mt-10 mx-auto pb-96  md:pb-72 md:mt-20 xl:mt-[150px]">
      <div className="flex justify-center items-center gap-2 md:gap-4 mx-auto  ">
        <div>
          <span className="bg-[#857878] inline-block w-10 md:w-20 h-1 text-[50px] mt-12 " >

          </span>
    
        </div>
        <div className="text-center mt-6  hidden md:block">
          <span className="drop-shadow-[3px_3px_0_rgba(139,0,0,1)] text-[#FFFFFF] text-[30px] md:text-[50px] font-semibold font-oswald">
            BRUNCH COCKTAILS
          </span>
        </div>

        <div className="flex flex-col md:hidden mt-10">
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
        </div>
        <div>
          <span className="bg-[#857878] inline-block w-10 md:w-20 h-1 text-[50px] mt-12">
          </span>  
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-5 md:p-20 gap-8">
        <div>
            <h1 className="text-[26px] font-oswald text-[#FFFFFF]">CINNAMON TOAST CRUNCH..........................$16</h1>
            <p className="text-[18px], font-kelly text-[#857878]">
            Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
            </p>

        </div>
        <div>
            <h1 className="text-[26px] font-oswald text-[#FFFFFF]">CINNAMON TOAST CRUNCH..........................$16</h1>
            <p className="text-[18px], font-kelly text-[#857878]">
            Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
            </p>

        </div>
        <div>
            <h1 className="text-[26px] font-oswald text-[#FFFFFF]">CINNAMON TOAST CRUNCH..........................$16</h1>
            <p className="text-[18px], font-kelly text-[#857878]">
            Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
            </p>

        </div>
        
      </div>
    </div>
  );
};
