import React, { useState } from "react";
import studioHero from "../../assets/studioHero.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Hero({ onImageLoad }) {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <div className="mt-[0px]">
      <div className="relative w-full h-[560px] md:h-[700px] lg:h-auto">
        {!heroImageLoaded && (
          <div className="absolute top-[50%] right-[50%] z-10 loader2"></div>
        )}
        <motion.img
          src={studioHero}
          alt="Background"
          className={`${
            heroImageLoaded ? "blur-0" : "blur-md"
          } w-full h-full object-cover`}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={heroImageLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          onLoad={() => {
            setHeroImageLoaded(true);
            onImageLoad(); // Notify parent that the image has loaded
          }}
        />
        <div className="absolute inset-0 pl-[24px] md:pl-[7%] pr-[24px] md:pr-[7%] flex flex-col items-start justify-center bg-black bg-opacity-50">
          <div className="flex flex-col gap-y-[16px] md:gap-y-[24px] w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20, letterSpacing: "0px" }}
              animate={
                heroImageLoaded
                  ? { opacity: 1, y: 0, letterSpacing: "1.5px" }
                  : {}
              }
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="text-[20px] lg:text-[23px] font-Poppins leading-[24px] lg:leading-[30px] font-normal text-[#fff]"
            >
              Create. Inspire. Grow.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroImageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
              className="text-[32px] text-[#fff] md:text-[43px] lg:text-[64px] leading-[36px] md:leading-[48px] lg:leading-[70px] font-Archivo font-extrabold uppercase"
            >
              <h1 className="text-[#DA482C]">Endura Studios-</h1>
              <h1>Bringing Your Vision</h1>
              <h1>to Life Creatively.</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={heroImageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
              className="md:mt-2 text-[18px] lg:text-[23px] font-Poppins leading-[24px] lg:leading-[30px] font-normal text-[#fff]"
            >
              From stunning reels to high-quality product photos, we help <br />
              brands shine in the fitness & lifestyle space.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroImageLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.3, ease: "easeOut" }}
            >
              <motion.button
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/endura.studios?igsh=Zm5jNXRnMWE4eGxk",
                    "_blank"
                  );
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#DA482C] px-[20px] py-[10px] rounded-[30px] text-[#F1F0EE] text-[16px] flex items-center gap-x-2 font-medium h-[56px] lg:mx-0"
              >
                <div>View Our Work</div>
                <FaArrowRightLong />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
