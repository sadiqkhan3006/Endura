import React from "react";
import about from "../../assets/about.png";
import { motion } from "framer-motion";
import { bgFadeIn, textFadeLeft, imageFadeRight } from "../../animation"; // Import animations

function About() {
  return (
    <div className="px-[6%]">
      {/* Background Animation */}
      <motion.div
        variants={bgFadeIn} // Background appears first
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="bg-[#932816] w-full flex flex-col md:flex-row gap-y-[32px] rounded-[16px] md:rounded-[32px] items-center gap-x-[10%] overflow-hidden md:h-[500px]"
      >
        {/* Text Animation (Starts after BG appears) */}
        <motion.div
          variants={textFadeLeft}
          className="w-full mt-[24px] pr-[24px] md:pr-0 md:mt-0 pl-[24px] md:pl-[48px] lg:pl-[80px] text-[#E4E2DE] flex flex-col gap-y-6 md:gap-y-8"
        >
          <h1 className="text-center md:text-left text-[32px] leading-[26px] lg:text-[64px] lg:leading-[70px] font-extrabold font-Archivo">
            Endura Studios
          </h1>
          <p className="text-[14px] text-center md:text-left leading-[18px] md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[28px] font-normal font-Poppins">
            Founded under Endura Fitness, we are a versatile creative studio,
            collaborating with brands eager to shine in the fitness and
            lifestyle space. From shooting reels, product photos, and Instagram
            posts to covering offline events, we bring your vision to life with
            excellence and creativity.
          </p>
          <p className="text-[16px] lg:text-[20px] font-semibold font-Poppins text-center md:text-left">
            Experience the Best with Endura Studios
          </p>
        </motion.div>

        {/* Image Animation (Starts after BG appears) */}
        <motion.div
          variants={imageFadeRight}
          className="h-full w-full lg:w-[80%]"
        >
          <img src={about} className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
