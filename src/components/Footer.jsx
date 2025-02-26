import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import contact1 from "../assets/contact1.svg";
import contact2 from "../assets/contact2.svg";
import contact3 from "../assets/contact3.svg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/enduralogo.svg";
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
              <div className="w-[100px] md:w-[120px] lg:w-[140px]">
                <img src={logo} alt="endura." />
              </div>
            </div>
            <div className="text-[#E4E2DE] font-Poppins md:text-[16px] text-[14px] leading-[16px]  lg:text-[20px] font-normal md:leading-[19px]  lg:leading-[23.3px]">
              Endura Fitness is your one-stop shop for personalized guidance,
              expert consultations, and a supportive community. Download the app
              and unlock a healthier, happier you.
            </div>
            <div className="text-[13px] text-[#FFEFBD] leading-[20px] md:text-[15px]  lg:text-[20px] md:leading-[24px]   font-Poppins   font-semibold  ">
              <span
                onClick={() => {
                  navigate("/terms-and-condition");
                }}
                className="  cursor-pointer"
              >
                Terms & Conditions{" "}
              </span>
              |
              <span
                onClick={() => {
                  navigate("/privacy-policy");
                }}
                className="  cursor-pointer "
              >
                {" "}
                Privacy Policy{" "}
              </span>
              |
              <span
                onClick={() => {
                  navigate("/contact-us");
                }}
                className="  cursor-pointer "
              >
                {" "}
                Contact Us
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col md:items-end">
            <div>
              <div className="text-[#fff] text-center font-Archivo text-[20px] leading-[23px] md:text-[22px] md:leading-[26px]   lg:text-[32px] lg:leading-[37px] font-medium">
                Get the App
              </div>
              <button
                onClick={() => {
                  navigate("/download");
                }}
                className="bg-[#DA482C] px-[20px] py-[10px] w-full h-[56px] lg:w-[331px] mt-[16px] lg:mt-[24px]  rounded-[30px] 
          text-[#F1F0EE] text-[16px] flex items-center justify-center gap-x-2 font-normal  "
              >
                <div>Download Now</div>
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

          <Link
            to={"mailto:info@endurafitness.in"}
            className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
          >
            <img src={contact2} />
          </Link>
          <Link
            to={"https://chat.whatsapp.com/K2a5n1tqDLWKt7OlTs9o0j"}
            target="blank"
            className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
          >
            <img src={contact3} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
