import React from "react";
import { motion } from "framer-motion";
import shootpitara from "../../assets/shootpitara.png";
import shootalpino from "../../assets/shootalpino.png";
import packagingdesign from "../../assets/packagingdesign.png";
import logodesign from "../../assets/logodesign.png";
import socialmedia from "../../assets/socialmedia.png";
import offlinecoverage from "../../assets/offlinecoverage.png";
import { textFadeUp, fadeUpItem } from "../../animation";

function Work() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const leftCards = [
    {
      id: 1,
      img: shootpitara,
      title: "Product Shoot for Pitara",
      desc: "Shot 60+ still images for an innovative startup in the food industry.",
    },
    {
      id: 2,
      img: shootalpino,
      title: "Shoot for Alpino super foods",
      desc: "A dynamic shoot with Mukesh Gahlot in association with Alpino Super Foods, capturing strength, nutrition, and performance.",
    },
    {
      id: 3,
      img: packagingdesign,
      title: "Packaging Design for What the Sauce",
      desc: "What’s The Sauce blends bold branding with global flavors, making every meal effortlessly extraordinary.",
    },
  ];
  const rightCards = [
    {
      id: 1,
      img: logodesign,
      title: "Illustrations, Logo Design, Language & Menu Design",
      desc: "Designed Communion Café’s brand language and murals, blending playful botanical illustrations with dynamic, connection-driven visuals.",
    },
    {
      id: 2,
      img: socialmedia,
      title: "Social Media Campaign for 15+ Brands",
      desc: "Created a series of promotional materials including professional adverts, reels and offline publicity.",
    },
    {
      id: 3,
      img: offlinecoverage,
      title: "Offline Coverage for ZEE 5 Awards",
      desc: "Shot for the sponsors at ZEE 5 iconic gold awards 2025- Gina drinks. Also provided event coverage for BAFPRO at IHHF (Asia’s biggest fitness expo).",
    },
  ];

  return (
    <div className="mt-[32px] md:mt-[60px] lg:mt-[80px] px-[7%]">
      <motion.div
        variants={textFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px] px-[6%]"
      >
        <motion.div
          variants={fadeUpItem}
          className="text-center font-Poppins text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]"
        >
          Our Work
        </motion.div>
        <motion.div
          variants={fadeUpItem}
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px]"
        >
          Bringing Brands to Life Through Visuals.
        </motion.div>
      </motion.div>

      <div className="mt-[16px] md:mt-[24px] lg:mt-[35px] flex flex-row gap-x-[18px] md:gap-x-[32px] lg:gap-x-[70px]">
        {/* Left cards */}
        <div className="flex flex-col w-full gap-y-[12px] md:gap-y-[32px] lg:gap-y-[60px]">
          {leftCards.map((data, index) => (
            <motion.div
              key={data.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={data.img}
                className="object-cover w-full"
                loading="lazy"
              />
              <h2 className="mt-[4px] md:mt-[8px] lg:mt-[12px] text-[11px] leading-[13px] md:text-[16px] md:leading-[18px] lg:text-[24px] lg:leading-[34px] font-Poppins font-semibold text-[#DA482C]">
                {data.title}
              </h2>
              <p className="mt-[1px] md:mt-[3px] lg:mt-[6px] text-[#171717] text-[8px] leading-[10px] md:text-[12px] md:leading-[16px] lg:text-[18px] lg:leading-[24px] font-normal font-Poppins">
                {data.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right cards */}
        <div className="flex flex-col w-full gap-y-[12px] md:gap-y-[32px] lg:gap-y-[60px]">
          {rightCards.map((data, index) => (
            <motion.div
              key={data.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={data.img}
                className="object-cover w-full"
                loading="lazy"
              />
              <h2 className="mt-[4px] md:mt-[8px] lg:mt-[12px] text-[11px] leading-[13px] md:text-[16px] md:leading-[18px] lg:text-[24px] lg:leading-[34px] font-Poppins font-semibold text-[#DA482C]">
                {data.title}
              </h2>
              <p className="mt-[1px] md:mt-[3px] lg:mt-[6px] text-[#171717] text-[8px] leading-[10px] md:text-[12px] md:leading-[16px] lg:text-[18px] lg:leading-[24px] font-normal font-Poppins">
                {data.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
