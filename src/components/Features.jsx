import React from "react";
import people from "../assets/people.svg";
import videoVC from "../assets/video.svg";
import screen1 from "../assets/Screen_1.png";
import interface1 from "../assets/interface.jpg";
import workout from "../assets/Workout.png";
import info from "../assets/info_workout.png";
import { animate, delay, motion } from "motion/react";
export const Features = () => {
  const fadeInSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const workoutInfoAnimation = {
    default: {
      x: 0,

      transition: {
        duration: 1.5,
        ease: "linear",
      },
    },
    hover: {
      x: "-40%",
      opacity: 1,
      transition: { delay: 0.1, duration: 0.6, ease: "linear" },
    },
  };

  const workoutCardAnimation = {
    default: {
      y: "0%", // Normal position
      x: "0%",
      transition: { duration: 1.5, ease: "linear" }, // Slow return
    },

    hover: {
      y: "-50%", // Moves up more
      x: "20%",

      transition: { delay: 0.1, duration: 0.6, ease: "linear" },
    },
  };
  const firstImageAnimation = {
    default: {
      y: "0%", // Normal position
      transition: { duration: 1.5, ease: "linear" }, // Slow return
    },

    hover: {
      y: "-70%", // Moves up more

      transition: { delay: 0.1, duration: 1.5, ease: "linear" },
    },
  };

  const secondImageAnimation = {
    default: {
      y: "0%", // Normal position
      transition: { duration: 1.5, ease: "linear" }, // Slow return
    },
    hover: {
      y: "-40%", // Moves up less

      transition: { delay: 0.1, duration: 1.2, ease: "linear" },
    },
  };
  return (
    <div id="Features" className="mx-[6%] mb-[60px] lg:mb-[160px]">
      <div className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px] ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInSlideUp}
          className="text-center font-Poppins  text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]  "
        >
          App Features
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          variants={fadeInSlideUp}
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold
        uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px] "
        >
          Feel the best experince with our features
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-x-[24px] gap-y-[32px]   ">
          {/* card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="px-[32px] lg:px-[45px] pb-[200px] md:pb-[450px]  bg-[#F8F8F7] rounded-[32px] relative overflow-hidden "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#F8F8F7] relative z-30 pt-[32px] lg:pt-[45px]"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                }}
                className="mb-[24px] md:mb-[40px] lg:mb-[50px] w-[48px] h-[48px] md:w-[72px] md:h-[72px] "
              >
                <img src={people} alt="people" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1, duration: 0.5 },
                  },
                }}
                className="  mb-[16px] md:mb-[20px] leading-[24px] md:leading-[36px] lg:leading-[40px] font-Poppins  text-[#171717] text-[20px] md:text-[32px] lg:text-[36px] font-medium  z-30"
              >
                Level Up Your Journey: Connect with Top-Tier Trainers &
                Nutritionists
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.5, duration: 0.5 },
                  },
                }}
                className="  mb-[16px] md:mb-[46px] leading-[20px] md:leading-[33.68px] font-Poppins  text-[#7D7D7D] text-[16px]  md:text-[24px] font-normal z-30 "
              >
                Get personalized guidance, expert advice, and tailored workout
                plans – all conveniently within the app. No more guesswork, just
                results.
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full h-full cursor-pointer"
              initial="default" // Initial position
              whileHover="hover"
              animate="default"
            >
              <motion.div
                variants={firstImageAnimation}
                className=" absolute w-[155px] h-[316px] md:w-[335px] md:h-[680px] right-[12%] -bottom-[25%] md:-bottom-[45%] z-20"
              >
                <img src={screen1} />
              </motion.div>
              <motion.div
                variants={secondImageAnimation}
                className="absolute w-[155px] h-[316px] md:w-[335px] md:h-[680px] left-[12%] z-10"
              >
                <img src={interface1} />
              </motion.div>
            </motion.div>
          </motion.div>
          {/* card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="px-[32px] lg:px-[45px] pb-[200px] md:pb-[450px]  bg-[#F8F8F7] rounded-[32px] relative overflow-hidden "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#F8F8F7] pt-[32px] lg:pt-[45px] relative z-30"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, duration: 0.5 },
                  },
                }}
                className="mb-[24px] md:mb-[40px] lg:mb-[50px] w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
              >
                <img src={videoVC} alt="people" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1, duration: 0.5 },
                  },
                }}
                className=" mb-[16px] md:mb-[20px] leading-[24px] md:leading-[36px] lg:leading-[40px] font-Poppins  text-[#171717] text-[20px] md:text-[32px] lg:text-[36px] font-medium "
              >
                Start Your Workout Now: Stream Pre-Recorded Sessions from Top
                Trainers
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.5, duration: 0.5 },
                  },
                }}
                className="mb-[16px] md:mb-[46px] leading-[20px] md:leading-[33.68px] font-Poppins  text-[#7D7D7D] text-[16px]  md:text-[24px] font-normal   "
              >
                Stream sessions that fit your schedule and fitness goals, all
                from the convenience of the app. Get started on your fitness
                journey now!
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full h-full"
              initial="default" // Initial position
              whileHover="hover"
              animate="default"
            >
              <motion.div
                variants={workoutCardAnimation}
                className=" absolute w-[155px] h-[316px] md:w-[335px] md:h-[680px] md:left-[7%] md:top-[90%] z-10"
              >
                <img src={workout} />
              </motion.div>
              <motion.div
                variants={workoutInfoAnimation}
                className=" absolute w-[335px] h-[680px] z-20 left-[60%] top-[65%] md:top-[55%] md:opacity-0"
              >
                <img
                  className="h-[80px] w-[280px] md:h-auto md:w-auto"
                  src={info}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
