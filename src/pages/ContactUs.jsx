import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
function ContactUs() {
  return (
    <div className="mt-[110px] md:mt-[120px] mb-[24px] md:mb-[40px] lg:mb-[80px] px-[32px] md:mx-[6%]">
      <div className="lg:hidden flex flex-col mb-[12px] md:mb-[16px] ">
        <h1
          className="font-Archivo text-[#171717]  text-[24px] md:text-[36px] lg:text-[48px] font-extrabold
        uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px] "
        >
          CONTACT US
        </h1>
        <p>Feel free to get in touch with us through our channels:</p>
      </div>
      <div className=" flex flex-col-reverse lg:flex-row gap-x-[32px]  ">
        {/* ELe1 */}
        <div className="flex flex-col gap-y-[48px] w-full py-[16px] md:py-[32px] lg:py-[120px]  ">
          <div className="hidden lg:flex flex-col ">
            <h1
              className="font-Archivo text-[#171717]  text-[24px] md:text-[36px] lg:text-[48px] font-extrabold
        uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px] "
            >
              CONTACT US
            </h1>
            <p>Feel free to get in touch with us through our channels:</p>
          </div>
          <div className="flex flex-col gap-y-4  md:gap-y-8  lg:gap-y-10">
            <div className="flex flex-col gap-y-2">
              <div className="font-Poppins   text-[#7D7D7D] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-normal   ">
                Call Us
              </div>
              <div className="flex flex-row items-center gap-x-2   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#000] font-normal ">
                <div>
                  <IoCallOutline />
                </div>
                <div>+91 8104503217</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-Poppins   text-[#7D7D7D] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-normal   ">
                Email Us
              </div>
              <div className="flex flex-row items-center gap-x-2   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#000] font-normal ">
                <div>
                  <VscMail />
                </div>
                <div>Info@endurafitness.in</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="font-Poppins   text-[#7D7D7D] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-normal   ">
                Address
              </div>
              <div className="flex flex-row items-center gap-x-2   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#000] font-normal ">
                <div>
                  <CiLocationOn />
                </div>
                <div>Arinda, Vashi sector 10, Navi Mumbai - 400703</div>
              </div>
            </div>
          </div>
        </div>
        {/* Ele 2 */}
        <div className="w-full rounded-3xl overflow-hidden">
          {/* <iframe
            className="lg:h-full lg:w-full   w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4987177469357!2d55.37312019678956!3d25.118824800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f65006738f61f%3A0xf34fd1b52dc98a67!2sBuilding%20A4%2C%20Dubai%20Digital%20Park%2C%20Dubai%20Silicon%20Oasis!5e0!3m2!1sen!2sin!4v1710569841532!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe> */}
          <iframe
            className="lg:h-full lg:w-full h-[255px] md:h-[408px]  w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5311694005386!2d72.99565767526171!3d19.084339982121943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1320e3aaaab%3A0xc893bae9e40ab902!2sArinda%20CHS!5e0!3m2!1sen!2sin!4v1733763244074!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
