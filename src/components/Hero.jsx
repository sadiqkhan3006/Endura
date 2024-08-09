import React from "react";
import iphoneMockup from "../assets/iPhone 14 Pro Mockup.png";
import { FaArrowRightLong } from "react-icons/fa6";
import peeps from "../assets/peers.svg";
import bar from "../assets/bar.svg";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const words = [
    "Strength",
    "Cardio",
    "Flexibility",
    "Balance",
    "Wellness",
    "Nutrition",
    "Motivation",
    "Result",
    "Aerobic",
    "Calisthenics",
    "MMA",
    "Endurance",
    "Yoga",
    "Trainers",
  ];
  return (
    <div id="Home" className="mt-[100px] ml-0 mb-[60px] lg:mb-[106px]">
      <div className="flex flex-col-reverse lg:flex-row   lg:h-[866px] gap-x-[5%] gap-y-[8px] ">
        <div className="w-full relative ">
          <img
            className="h-[433px] md:h-[700px] lg:h-full w-full "
            src={iphoneMockup}
          />
          <div
            className="  invisible  lg:visible status bg-white absolute z-10 top-[10%] -right-[3%] flex  items-center gap-x-[4px] py-[7px] pl-[9px] pr-[22px] 
          rounded-[56px] h-[53px]  "
          >
            <div className="w-[40px] h-[40px] bg-[#932816] rounded-full flex items-center justify-center ">
              <img src={bar} />
            </div>
            <div className="text-[#932816] font-Archivo text-[11px] font-bold  ">
              750+ Workout Activity
            </div>
          </div>
          <div
            className=" invisible  lg:visible status bg-white absolute z-10 bottom-[37%] left-[25%] flex  items-center gap-x-[4px] py-[7px] pl-[9px] pr-[22px] 
          rounded-[56px] h-[53px]  "
          >
            <div className="w-[40px] h-[40px] bg-[#932816] rounded-full flex items-center justify-center ">
              <img src={peeps} />
            </div>
            <div className="text-[#932816] font-Archivo text-[11px] font-bold  ">
              1250+ Personal Trainers
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center pr-[3%] ">
          <div className="flex flex-col  gap-y-[16px] md:gap-y-[24px] px-[7%] lg:px-0">
            <div className="text-[20px] lg:text-[23px] font-Poppins leading-[24px] lg:leading-[30px] font-normal text-[#171717]">
              Train. Transform. Thrive.
            </div>
            <div className="text-[32px] md:text-[43px] lg:text-[64px] leading-[36px] md:leading-[48px] lg:leading-[70px] font-Archivo font-extrabold uppercase ">
              <span className="text-[#DA482C] ">Endura - </span>
              <br />
              Your Personalized Fitness Journey Starts Here
            </div>
            <div className="text-[18px] md:text-[23px] font-Poppins leading-[22px] md:leading-[30px] font-normal text-[#7D7D7D]">
              Endura Fitness goes beyond just workouts. We empower you with
              personalized guidance, comprehensive tracking, and expert
              consultations to make fitness a sustainable lifestyle.
            </div>
          </div>

          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="bg-[#DA482C] px-[20px] py-[10px]  w-[235px] mt-[16px] md:mt-[24px]  rounded-[30px] 
          text-[#F1F0EE] text-[16px] flex items-center gap-x-2 font-normal mx-[7%] h-[56px] lg:mx-0"
          >
            <div>Sign Up for Early Acess</div>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[62px] bg-[#EFCEC2] "></div>
        <div
          className=" absolute z-10 left-0 top-0 -rotate-[5deg] lg:-rotate-[2.809deg]  w-full h-[62px] bg-[#FFEFBD]
         flex flex-row text-[#932816] text-[20px] md:text-[24px] lg:text-[32px] font-Archivo font-bold gap-x-[24px] md:gap-x-[40px] lg:gap-x-[60px] items-center overflow-x-hidden  "
        >
          {words.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
