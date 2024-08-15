import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import contact1 from "../assets/contact1.svg";
import contact2 from "../assets/contact2.svg";
import contact3 from "../assets/contact3.svg";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-[4%]   bg-[#F1F0EE]  pt-[64px] md:pt-[80px] ">
        <div className="uppercase text-[#171717]  text-center font-Archivo  text-[28px] md:text-[48px] lg:text-[78px] font-semibold mb-[48px] md:mb-[60px] lg:mb-[90px] leading-[30px] md:leading-[40px]  lg:leading-[90.2px]">
          Train. Transform. Thrive
        </div>
        <div className="flex flex-col md:flex-row bg-black text-white p-[40px] lg:p-[80px] rounded-[32px] justify-between  items-center  gap-y-[24px] gap-x-[24px]    ">
          <div className="w-full flex flex-col gap-y-[24px] lg:gap-y-[32px] ">
            <div className="text-[#DA482C] font-Archivo text-[36px] md:text-[48px] lg:text-[64px] leading-[52px] lg:leading-[70px] font-extrabold  ">
              endura.
            </div>
            <div className="text-[#E4E2DE] font-Poppins md:text-[16px] text-[14px] leading-[16px]  lg:text-[20px] font-normal md:leading-[19px]  lg:leading-[23.3px]">
              Endura Fitness is your one-stop shop for personalized guidance,
              expert consultations, and a supportive community. Download the app
              and unlock a healthier, happier you.
            </div>
          </div>
          <div className="w-full flex flex-col md:items-end">
            <div>
              <div className="text-[#fff] font-Archivo text-[20px] leading-[23px] md:text-[22px] md:leading-[26px]   lg:text-[32px] lg:leading-[37px] font-medium">
                Sign up for Early Access
              </div>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="bg-[#DA482C] px-[20px] py-[10px] w-full h-[56px] lg:w-[331px] mt-[16px] lg:mt-[24px]  rounded-[30px] 
          text-[#F1F0EE] text-[16px] flex items-center justify-center gap-x-2 font-normal  "
              >
                <div>Sign Up Now</div>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[28px] md:py-[35px] px-[4%] flex flex-row justify-between items-center bg-[#F1F0EE] ">
        <div className="text-black font-Poppins  text-[15px] font-medium   leading-[12.3px]">
          © 2024 endura. All Right Reserved
        </div>
        <div className="flex gap-x-[16px]">
          <Link
            to={"https://www.instagram.com/endura.fitness"}
            target="blank"
            className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
          >
            <img className="w-full h-full" src={contact1} />
          </Link>
          <div className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]">
            <img src={contact2} />
          </div>
          <div className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]">
            <img src={contact3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
