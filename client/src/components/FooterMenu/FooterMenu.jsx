import React from "react";
import { FiMail } from "react-icons/fi";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook-icon.png";
import youtube from "../../assets/youtube-icon.png";
import instagram from "../../assets/insta-icon.png";
import twitter from "../../assets/x-icon.png";
import location from "../../assets/location-icon.png";

export const FooterMenu = () => {
  return (
    <div className="grid xl:grid-cols-3 mx-auto gap-4 xl:gap-0 mt-20 md:mt-40 xl:mt-10">
      <div className="xl:hidden xl:w-[373px] xl:h-[134px] rounded-xl border flex gap-4 justify-center items-center p-2 w-full">
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center items-center ">
            <span className="absolute top-[1120px] xl:top-[1205px] md:top-[1325px]">
              <img
                src={logo}
                className="w-[50px] h-[44px] md:w-[86px] md:h-[76px]"
                alt="logo"
              />
            </span>

            <span className="text-[35px] text-[#0796EF] mt-8 font-oswald">
              DEEP
            </span>
            <span className="md:inline text-[#FFFFFF] text-[35px] font-oswald mt-8 ">
              NET
            </span>
            <span className="text-[#857878] text-[35px] font-oswald mt-8">
              SOFT
            </span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <img src={facebook} alt="facebook icon" />
            </div>
            <div>
              <img src={twitter} alt="twitter icon" />
            </div>
            <div>
              <img src={youtube} alt="youtube icon" />
            </div>
            <div>
              <img src={instagram} alt="instagram icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="   xl:w-[373px] xl:h-[134px] rounded-xl border p-2 md:flex  flex-col items-center justify-center">
        <div className="mb-4">
          <h1 className="text-[16px] text-[#0796EF] font-oswald">
            CONNECT WITH US
          </h1>
        </div>
        <div>
          <h2 className="text-[#857878] text-[16px]">
            <span className="text-[#C5A059] me-1"> &#9743;</span>
            +91 9567843340
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <FiMail className="text-[#C5A059]" />

          <h2 className="text-[#857878] text-[16px]">info@deepnetsoft.com</h2>
        </div>
      </div>
      <div className="hidden xl:w-[373px] xl:h-[134px] rounded-xl border xl:flex gap-4 justify-center items-center p-2 w-full">
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center items-center ">
            <span className="absolute top-[1243px] xl:top-[1205px] md:top-[1446px]">
              <img
                src={logo}
                className="w-[50px] h-[44px] md:w-[86px] md:h-[76px]"
                alt="logo"
              />
            </span>

            <span className="text-[35px] text-[#0796EF] mt-8 font-oswald">
              DEEP
            </span>
            <span className="md:inline text-[#FFFFFF] text-[35px] font-oswald mt-8 ">
              NET
            </span>
            <span className="text-[#857878] text-[35px] font-oswald mt-8">
              SOFT
            </span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <img src={facebook} alt="facebook icon" />
            </div>
            <div>
              <img src={twitter} alt="twitter icon" />
            </div>
            <div>
              <img src={youtube} alt="youtube icon" />
            </div>
            <div>
              <img src={instagram} alt="instagram icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[373px] xl:h-[134px] rounded-xl border p-2">
        <div className="flex flex-col justify-center items-center h-full">
          <div className=" mb-1 xl:mb-4">
            <span className="text-[16px] text-[#0796EF] font-oswald">
              FIND US
            </span>
          </div>
          <div className="flex gap-4">
            <div>
              <img
                className="w-[20px] h-[25px]"
                src={location}
                alt="location"
              />
            </div>
            <div>
              <div>
                <div>
                  <p className="text-[#857878] text-[16px]">
                    First floor, Geo infopark,
                  </p>
                </div>
                <div>
                  <p className="text-[#857878] text-[16px]">
                  Infopark EXPY, Kakkanad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
