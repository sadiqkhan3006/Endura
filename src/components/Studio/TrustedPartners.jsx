import { brandsLogo } from "../../data/Brands";
import React from "react";
import { motion } from "framer-motion";
import { textFadeUp, fadeUpItem } from "../../animation"; // Importing animation variants

function TrustedPartners() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpItem} // The whole section fades in when in view
      className="mt-[32px] md:mt-[60px] lg:mt-[160px] mb-[32px] md:mb-[60px] lg:mb-[160px] overflow-x-hidden"
    >
      <motion.div
        variants={textFadeUp} // Apply staggered fade-up effect to headings
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px] px-[6%]"
      >
        <motion.div
          variants={fadeUpItem}
          className="text-center font-Poppins text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]"
        >
          Our Trusted Partners
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px]"
        >
          SEE WHO WE ARE WORKING WITH
        </motion.div>
      </motion.div>

      {/* Marquee effect, made visible once in view */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-row gap-x-[24px] lg:gap-x-[32px]"
      >
        <motion.div
          animate={{ x: ["0%", "-101.4%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-row gap-x-[24px] lg:gap-x-[32px] mt-[35px] text-wrap"
        >
          {brandsLogo.map((data, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-[58px] md:w-[80px] lg:w-[146px]">
                <img src={data} className="w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["0%", "-101.4%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-row gap-x-[24px] lg:gap-x-[32px] mt-[35px] text-wrap"
        >
          {brandsLogo.map((data, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-[58px] md:w-[80px] lg:w-[146px]">
                <img src={data} className="w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TrustedPartners;
