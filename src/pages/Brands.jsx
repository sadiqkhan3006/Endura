import React from "react";
import brands from "../data/Brands";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Brands() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations
        delayChildren: 0.3, // Delay before starting animations
      },
    },
  };

  const brandCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const productCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="mt-[22px] mx-[6%] mb-[60px] lg:mb-[160px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger animation once, when 10% of the element is visible
      variants={containerVariants}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px]">
        <motion.div
          className="text-center font-Poppins text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]"
          variants={brandCardVariants}
        >
          Trusted By
        </motion.div>
        <motion.div
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px]"
          variants={brandCardVariants}
        >
          Trusted by those who demand the best experience.
        </motion.div>
      </div>

      {/* Brands Section */}
      <motion.div
        className="flex flex-col gap-y-8 mt-[35px]"
        variants={containerVariants}
      >
        {brands.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col lg:flex-row gap-y-6 items-center"
            variants={brandCardVariants}
            whileHover="hover"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger animation once, when 10% of the element is visible
          >
            {/* Brand Info */}
            <div className="flex flex-col md:flex-row lg:flex-col lg:w-[70%] gap-y-[16px] items-start">
              <div className="flex items-center lg:items-start md:flex-row gap-x-[8px] md:gap-x-[16px] lg:gap-x-[24px] md:px-[24px]">
                <div className="md:w-[60%]">
                  <div className="flex items-start">
                    <img
                      className="w-[48px] md:w-full"
                      src={item.logo}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-Poppins text-black text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[32px] lg:leading-[36px] font-medium">
                    {item.name}
                  </div>
                  <div className="hidden md:flex font-Poppins text-[#7D7D7D] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px] lg:text-[24px] lg:leading-[34px] font-normal">
                    {item.desc}
                  </div>
                </div>
              </div>
              <div className="md:hidden font-Poppins text-[#7D7D7D] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px] lg:text-[24px] lg:leading-[34px] font-normal">
                {item.desc}
              </div>
              <div className="flex flex-row md:flex-col gap-y-2 lg:flex-row lg:px-[24px] gap-x-4">
                <div>
                  <motion.div
                    onClick={() => window.open(item.instagram, "_blank")}
                    className="cursor-pointer px-[20px] py-[8px] md:py-[10px] bg-[#F8F8F7] border border-[#E4E2DE] rounded-[30px] flex flex-row items-center gap-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram />
                    <div className="font-Archivo text-black text-[15px] font-medium">
                      Instagram
                    </div>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    onClick={() => window.open(item.website, "_blank")}
                    className="cursor-pointer px-[20px] py-[8px] md:py-[10px] bg-[#F8F8F7] border border-[#E4E2DE] rounded-[30px] flex flex-row items-center gap-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CiGlobe />
                    <div className="font-Archivo text-black text-[15px] font-medium">
                      Website
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <motion.div
              className="flex flex-row py-[20px] md:py-[24px] lg:py-[32px] px-[2%] rounded-[16px] md:rounded-[32px] bg-[#F8F8F7] w-full gap-x-[8px] md:justify-evenly"
              variants={containerVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Trigger animation once, when 10% of the element is visible
            >
              {item.products.map((prod) => (
                <motion.div
                  key={prod.id}
                  className="relative pb-[12px] border-[1px] border-[#E4E2DE] rounded-[16px] md:rounded-3xl"
                  variants={productCardVariants}
                  whileHover="hover"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} // Trigger animation once, when 10% of the element is visible
                >
                  <div>
                    <img className="w-full" src={prod.img} alt={prod.title} />
                  </div>
                  <div className="pt-[8px] px-[8px] font-Archivo text-black font-semibold text-[12px] md:text-[16px] lg:text-[20px] text-center">
                    {prod.title}
                  </div>
                  <motion.button
                    onClick={() => window.open(prod.link, "_blank")}
                    className="absolute right-0 bottom-[32%] md:bottom-[20%] bg-[#DA482C] text-white w-[32px] h-[32px] md:w-[32px] md:h-[32px] lg:w-[45px] lg:h-[45px] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MdArrowOutward />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Brands;
