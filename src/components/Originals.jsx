import React from "react";
import creators from "../assets/creators_corner.png";
import healtyEats from "../assets/healty_eats.png";
import videoIcon from "../assets/videoIcon.svg";
import workout from "../assets/workout.svg";
import run from "../assets/run.svg";
import repeat from "../assets/repeat.svg";
import dumbell from "../assets/dumbell.svg";
import { motion } from "framer-motion";
import { textFadeUp, fadeUpItem } from "../animation"; // Import animation variants

export const Originals = () => {
  const creatorsCorner = [
    {
      id: 1,
      title: "Quick Workouts",
      description:
        "Focuses on short, individual workout videos perfect for quick fitness sessions",
      icon: workout,
    },
    {
      id: 2,
      title: "Home Filming",
      description:
        "All videos are shot by creators in their own home studios, providing a personal touch",
      icon: videoIcon,
    },
    {
      id: 3,
      title: "No Courses",
      description:
        "Unlike structured courses, these videos are standalone workouts tailored for variety and convenience",
      icon: dumbell,
    },
    {
      id: 4,
      title: "Regular Updates",
      description:
        "New content is added regularly to keep your routine fresh and exciting",
      icon: repeat,
    },
    {
      id: 5,
      title: "Creator - Driven",
      description:
        "Features unique styles and techniques from diverse fitness creators, offering a wide range of workout options",
      icon: run,
    },
  ];

  const Healthy = [
    {
      id: 1,
      title: "Healthy Recipes",
      description:
        "Videos feature a variety of nutritious meal and snack options",
      icon: workout,
    },
    {
      id: 2,
      title: "Expert Tips",
      description:
        "Nutritionists provide insights into the health benefits of the recipes used",
      icon: videoIcon,
    },
    {
      id: 3,
      title: "Collaboration Opportunities",
      description:
        "This section is designed to facilitate partnerships with healthy food brands, showcasing their products in the recipes",
      icon: dumbell,
    },
  ];

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="mx-[6%] mb-[60px] lg:mb-[160px]">
      <motion.div
        variants={textFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px]"
      >
        <motion.div
          variants={fadeUpItem}
          className="text-center font-Poppins text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]"
        >
          Endura Originals
        </motion.div>
        <motion.div
          variants={fadeUpItem}
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px]"
        >
          Discover, Connect, and Thrive with Endura
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:py-[24px] gap-y-[32px] md:gap-y-[48px] lg:gap-y-[72px]">
        {/* Creators Corner Section */}
        <div className="flex flex-col lg:flex-row gap-y-[32px] md:gap-y-[40px] gap-x-[100px]">
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full pt-[4%]"
          >
            <img
              className="w-full object-cover"
              src={creators}
              alt="creators"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={textFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full h-full"
          >
            <motion.h1
              variants={fadeUpItem}
              className="mb-[16px] md:mb-[24px] text-[24px] md:text-[32px] lg:text-[40px] font-semibold font-Archivo text-[#DA482C]"
            >
              Creators Corner
            </motion.h1>
            <div className="flex flex-col gap-y-[24px] md:gap-y-[32px] lg:gap-y-[48px] py-[8px] md:py-[16px] lg:py-[40px]">
              {creatorsCorner.map((value) => (
                <motion.div
                  key={value.id}
                  variants={fadeUpItem}
                  className="flex flex-row gap-x-[8px] md:gap-x-[16px] items-center"
                >
                  <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-full bg-[#FFEFBD] flex items-center justify-center">
                    <img src={value.icon} loading="lazy" alt={value.title} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-medium font-Archivo text-[#171717]">
                      {value.title}
                    </div>
                    <div className="text-[16px] md:text-[18px] lg:text-[20px] font-Poppins text-[#7D7D7D]">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Healthy Eats Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-y-[32px] md:gap-y-[40px] gap-x-[100px]">
          <motion.div
            variants={fadeInScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full"
          >
            <img
              className="w-full object-cover"
              src={healtyEats}
              alt="Healthy Eats"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={textFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full h-full"
          >
            <motion.h1
              variants={fadeUpItem}
              className="mb-[16px] md:mb-[24px] text-[24px] md:text-[32px] lg:text-[40px] font-semibold font-Archivo text-[#DA482C]"
            >
              Healthy Eats
            </motion.h1>
            <div className="flex flex-col gap-y-[24px] md:gap-y-[32px] lg:gap-y-[48px] py-[8px] md:py-[16px] lg:py-[40px]">
              {Healthy.map((value) => (
                <motion.div
                  key={value.id}
                  variants={fadeUpItem}
                  className="flex flex-row gap-x-[8px] md:gap-x-[16px] items-center"
                >
                  <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded-full bg-[#FFEFBD] flex items-center justify-center">
                    <img src={value.icon} loading="lazy" alt={value.title} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-medium font-Archivo text-[#171717]">
                      {value.title}
                    </div>
                    <div className="text-[16px] md:text-[18px] lg:text-[20px] font-Poppins text-[#7D7D7D]">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
