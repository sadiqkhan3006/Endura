import { brandsLogo } from "../../data/Brands";
import React from "react";
import { motion } from "motion/react";
function TrustedPartners() {
  return (
    <div className="mt-[32px] md:mt-[60px] lg:mt-[160px] mb-[32px] md:mb-[60px] lg:mb-[160px]  overflow-x-hidden">
      <div className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px] px-[6%] ">
        <div className="text-center font-Poppins  text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]  ">
          Our Trusted Partners
        </div>
        <div
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold
        uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px] "
        >
          SEE WHO WE ARE WORKING WITH
        </div>
      </div>
      {/* marquee effect */}
      <div className="flex flex-row gap-x-[24px] lg:gap-x-[32px]">
        <motion.div
          animate={{ x: ["0%", "-101.4%"] }} // Moves text left
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-row gap-x-[24px] lg:gap-x-[32px] mt-[35px] text-wrap"
        >
          {brandsLogo.map((data, index) => {
            return (
              <motion.div className="flex items-center justify-center  ">
                <div key={index} className="w-[58px] md:w-[80px] lg:w-[146px]">
                  <img src={data} className="w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-101.4%"] }} // Moves text left
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-row gap-x-[24px] lg:gap-x-[32px] mt-[35px] text-wrap"
        >
          {brandsLogo.map((data, index) => {
            return (
              <motion.div className="flex items-center justify-center  ">
                <div key={index} className="w-[58px] md:w-[80px] lg:w-[146px]">
                  <img src={data} className="w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default TrustedPartners;
