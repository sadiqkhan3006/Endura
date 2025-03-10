import React, { useState } from "react";
import iphoneMockup from "../assets/iPhone 14 Pro Mockup.png";
import { FaArrowRightLong } from "react-icons/fa6";
import peeps from "../assets/peers.svg";
import bar from "../assets/bar.svg";
import { useNavigate } from "react-router-dom";
import rectangle from "../assets/rectangle.png";
import { motion } from "motion/react";
function Hero_new() {
  const navigate = useNavigate();
  const [imgLoaded, setimgLoaded] = useState(false);
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
    <div className=" mb-[60px] lg:mb-[106px] ">
      <div className=" overflow-x-hidden pt-[22px] flex flex-col-reverse lg:flex-row gap-x-[111px] gap-y-3 h-auto relative ">
        {!imgLoaded && (
          <div className="absolute top-[50%] right-[50%] -z-10  loader2"></div>
        )}
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ x: "-100%", opacity: 0, scale: 0.9 }}
            animate={imgLoaded ? { x: "0", opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={rectangle}
            alt="background"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="lg:w-[95%] relative">
          <motion.img
            initial={{ x: "-100%", opacity: 0, scale: 0.9 }}
            animate={imgLoaded ? { x: "0", opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={iphoneMockup}
            loading="lazy"
            alt="iphone"
            className="w-full object-contain  "
            onLoad={() => setimgLoaded(true)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="  invisible  lg:visible status bg-white absolute z-10 top-[10%] -right-[3%] flex  items-center gap-x-[4px] py-[7px] pl-[9px] pr-[22px] 
          rounded-[56px] h-[53px]  "
          >
            <div className="w-[40px] h-[40px] bg-[#932816] rounded-full flex items-center justify-center ">
              <img src={bar} />
            </div>
            <div className="text-[#932816] font-Archivo text-[11px] font-bold  ">
              750+ Workout Activity
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className=" invisible  lg:visible status bg-white absolute z-10 bottom-[37%] left-[25%] flex  items-center gap-x-[4px] py-[7px] pl-[9px] pr-[22px] 
          rounded-[56px] h-[53px]  "
          >
            <div className="w-[40px] h-[40px] bg-[#932816] rounded-full flex items-center justify-center ">
              <img src={peeps} />
            </div>
            <div className="text-[#932816] font-Archivo text-[11px] font-bold  ">
              1250+ Personal Trainers
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center pr-[3%] ">
          <div className="flex flex-col  gap-y-[16px] md:gap-y-[24px] px-[7%] lg:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20, letterSpacing: "0px" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "1.5px" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-[20px] lg:text-[23px] font-Poppins leading-[24px] lg:leading-[30px] font-normal text-[#171717]"
            >
              Train. Transform. Thrive.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            >
              <div className="text-[32px] md:text-[43px] lg:text-[64px] leading-[36px] md:leading-[48px] lg:leading-[70px] font-Archivo font-extrabold uppercase ">
                <span className="text-[#DA482C] ">Endura - </span>
                <br />
                Your Personalized Fitness Journey Starts Here
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
              className="text-[18px] md:text-[23px] font-Poppins leading-[22px] md:leading-[30px] font-normal text-[#7D7D7D]"
            >
              Endura Fitness goes beyond just workouts. We empower you with
              personalized guidance, comprehensive tracking, and expert
              consultations to make fitness a sustainable lifestyle.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                navigate("/download");
              }}
              className="bg-[#DA482C] px-[20px] py-[10px]   mt-[16px] md:mt-[24px]  rounded-[30px] 
          text-[#F1F0EE] text-[16px] flex items-center gap-x-2 font-medium  mx-[7%] h-[56px] lg:mx-0"
            >
              <div>Download Now</div>
              <FaArrowRightLong />
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[62px] bg-[#EFCEC2] "></div>
        <div
          // initial={{ rotate: -5 }}
          // animate={{ x: "-100%" }}
          // transition={{ delay: 1, duration: 1 }}
          className=" absolute z-10 left-0 top-0 -rotate-[5deg] lg:-rotate-[2.809deg]  w-full h-[62px] bg-[#FFEFBD]
         flex flex-row text-[#932816] text-[20px] md:text-[24px] lg:text-[32px] font-Archivo font-bold gap-x-[24px] md:gap-x-[40px] lg:gap-x-[60px] items-center overflow-x-hidden   "
        >
          <motion.div
            animate={{ x: ["0%", "-102.3%"] }} // Moves text left
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            className="flex flex-row gap-x-[24px] md:gap-x-[40px] lg:gap-x-[60px]"
          >
            {words.map((item, index) => (
              <div
                // animate={{ x: "-200%" }}
                // transition={{ delay: 1, repeat: Infinity }}
                key={index}
              >
                {item}
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-102.3%"] }} // Moves text left
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            className="flex flex-row gap-x-[24px] md:gap-x-[40px] lg:gap-x-[60px]"
          >
            {words.map((item, index) => (
              <motion.div
                // animate={{ x: "-200%" }}
                // transition={{ delay: 1, repeat: Infinity }}
                key={index}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero_new;
