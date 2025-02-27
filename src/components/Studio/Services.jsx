import React from "react";
import cgi from "../../assets/cgi&3d.png";
import branding from "../../assets/branding&packaging.png";
import producttphotography from "../../assets/producttphotography.png";
import reels from "../../assets/reels.png";
import staticPost from "../../assets/static.png";
import event from "../../assets/event.png";
import { textFadeUp, fadeUpItem, hoverEffect } from "../../animation"; // Import hover effect
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      id: 1,
      desc: "We handle every step to create high-converting reels from sourcing creators, scripting to professional filming & editing. Our team ensures your reels are both visually stunning & strategically impactful.",
      title: "Reels / Adverts",
      img: reels,
    },
    {
      id: 2,
      desc: "We create visually appealing Instagram posts tailored to showcase your products, ensuring your feed stays engaging and your posting schedule consistent.",
      title: "Static Posts",
      img: staticPost,
    },
    {
      id: 3,
      desc: "We offer high-quality product photoshoots at the best rates, whether you need clean, simple background shots or creative setups with props to make your products stand out.",
      title: "Product Photography",
      img: producttphotography,
    },
    {
      id: 4,
      desc: "Endura Studios crafts impactful branding & packaging, creating identities that enhance recognition and engagement. From logos to packaging, we deliver high-quality designs that align with your vision.",
      title: "Branding & Packaging",
      img: branding,
    },
    {
      id: 5,
      desc: "We specialize in high-quality product photography, CGI ads, and 3D videos—delivering stunning visuals that elevate brand recognition. Work for PICKLX - paddle manufacturers for pickle ball",
      title: "CGI & 3D Product ads",
      img: cgi,
    },
    {
      id: 6,
      desc: "We also shoot at offline events; we will be present at IHFF Delhi which is Asias biggest fitness expo. Our work also includes coverage of ZEE5 Iconic gold awards 2025 Mumbai.",
      title: "Event  Coverage",
      img: event,
    },
  ];

  return (
    <div className="mt-[32px] md:mt-[60px] lg:mt-[80px] mb-[32px] md:mb-[60px] lg:mb-[160px] overflow-x-hidden px-[6%]">
      {/* Heading Animation */}
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
          Services
        </motion.div>
        <motion.div
          variants={fadeUpItem}
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px]"
        >
          Discover, Connect, and Thrive with Endura
        </motion.div>
      </motion.div>

      {/* Cards Animation */}
      <motion.div
        variants={textFadeUp} // Parent with staggerChildren
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-row gap-x-6 justify-center flex-wrap gap-y-6 mt-[35px]"
      >
        {services.map((data) => (
          <motion.div
            key={data.id}
            variants={fadeUpItem} // Fade-up animation
            whileHover={hoverEffect.whileHover} // Hover animation
            transition={hoverEffect.transition}
            className="flex flex-col w-auto md:w-[320px] lg:w-[325px] cursor-pointer"
          >
            <div className="text-[#7D7D7D] font-Archivo text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-[32px] md:leading-[36px] lg:leading-[46px]">
              0{data.id}
            </div>
            <div className="text-[#000] font-Poppins text-[14px] md:text-[16px] font-normal md:h-[144px] mt-[12px] mb-[24px]">
              {data.desc}
            </div>
            <div>
              <img
                src={data.img}
                className="object-cover"
                alt="product"
                loading="lazy"
              />
            </div>
            <div className="text-[#DA482C] font-Archivo text-[24px] font-semibold bg-[#F1F0EE] rounded-b-[24px] py-[24px] px-[24px]">
              {data.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
