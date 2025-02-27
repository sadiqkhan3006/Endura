import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Trainers from "../data/TrainersInfo";
import TrainersImg from "../data/TrainersGallery";
import Insta from "../assets/Insta.svg";
import Fb from "../assets/Fb.svg";
import { textFadeUp, fadeUpItem, swiperVariants } from "../animation";
import {
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import trainerImages from "../data/TrainersGallery";
import { Link } from "react-router-dom";

export const Team = () => {
  const swiperReff = useRef();
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 820) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div id="Team" className="mx-[6%] mb-[60px] md:mb-[60px] lg:mb-[160px]">
      <motion.div
        variants={textFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col items-center gap-y-[35px] "
      >
        <motion.div
          variants={fadeUpItem}
          className="text-center font-Poppins text-[#171717] text-[20px] leading-[24px] md:text-[23px] md:leading-[30px] font-normal"
        >
          Team Members
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          className="font-Archivo text-[#171717] text-center text-[24px] leading-[28px] md:text-[36px] md:leading-[42px] lg:text-[48px] lg:leading-[56px] font-extrabold uppercase max-w-[902px]"
        >
          The Team Behind Your Fitness Journey
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={swiperVariants}
        className="w-full"
      >
        <Swiper
          className="mySwiper overflow-visible"
          slidesPerView={slidesPerView}
          spaceBetween={32}
          pagination={{ clickable: true }}
          freeMode={true}
          navigation={false}
          ref={swiperReff}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Scrollbar, FreeMode, Autoplay]}
        >
          <div className="py-[50px]">
            {Trainers.map((value) => (
              <SwiperSlide
                key={value.id}
                className="rounded-[16px] lg:rounded-[24px]"
              >
                <div className="rounded-[16px] lg:rounded-[24px] mt-[35px] mb-[43px]">
                  <img
                    className="rounded-t-[16px] lg:rounded-t-[24px] w-full"
                    src={trainerImages[value.id]}
                    alt={value.name}
                  />
                  <div className="py-[24px] px-[12px] md:px-[24px] bg-[#932816] rounded-b-[16px] lg:rounded-b-[24px]">
                    <div className="text-[#FFEFBD] font-Archivo text-[14px] md:text-[20px] font-semibold leading-[18px] md:leading-[24px]">
                      {value.name}
                    </div>
                    <div className="text-[#F1F0EE] font-Poppins text-[12px] md:text-[16px] font-normal leading-[17px] md:leading-[23.2px]">
                      {value.type}
                    </div>
                    <div className="flex gap-x-[18px] mt-[16px]">
                      <Link to={value.instagram} target="_blank">
                        <img src={Insta} alt="Instagram" />
                      </Link>
                      <div>
                        <img src={Fb} alt="Facebook" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </motion.div>
    </div>
  );
};
