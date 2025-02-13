import React, { useState } from "react";
import downloadIMg from "../assets/downloadNow.png";
import logoImg from "../assets/logoImage.png";
import appstore from "../assets/appstore.svg";
import playstore from "../assets/playstore.svg";
function DownloadNow() {
  const [isLoad, setisLoad] = useState(false);
  return (
    <div className="mt-[22px] lg:mt-[96px] px-[7%] mb-[117px]  ">
      <div className="flex  flex-col md:flex-row items-center gap-x-[7%] gap-y-6 ">
        <div className="md:w-[140%] lg:w-[75%] flex flex-col gap-y-8 ">
          <div className="h-[80px] w-[80px] lg:h-auto lg:w-auto">
            <img
              className=" object-cover"
              src={logoImg}
              alt="logo"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-y-3 ">
            <div
              className="font-Poppins  text-[#171717]  text-[24px] md:text-[32px] lg:text-[40px] font-bold
         leading-[26px] md:leading-[35px] lg:leading-[44px]  "
            >
              Get the App Now
            </div>
            <p className="text-[14px] leading-[18px] lg:text-[18px]   lg:leading-[27px]   font-Poppins  text-[#7D7D7D] ">
              Endura Fitness goes beyond just workouts. We empower you with
              personalized guidance, comprehensive tracking, and expert
              consultations to make fitness a sustainable lifestyle.
            </p>
            <h3
              className="font-Poppins  text-[#171717]  text-[14px] md:text-[16px] lg:text-[18px] font-semibold 
         leading-[18px] md:leading-[20px] lg:leading-[27px]"
            >
              Your Personalized Fitness Journey Starts Here !
            </h3>
          </div>
          <div className="flex flex-row gap-x-4">
            <div
              className="cursor-pointer "
              onClick={() => {
                window.open(
                  "https://apps.apple.com/in/app/endura-fitness/id6739778728",
                  "_blank"
                );
              }}
            >
              <img src={appstore} alt="appstore" loading="lazy" />
            </div>
            <div
              className="cursor-pointer "
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.endurafitness.userapp",
                  "_blank"
                );
              }}
            >
              <img src={playstore} alt="playstore" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="w-full h-[332px] md:h-[392px] lg:h-auto rounded-[24px] ">
          <img
            loading="lazy"
            alt="downloa Now"
            className="w-full h-full object-cover overflow-hidden rounded-[16px] lg:rounded-[24px] "
            src={downloadIMg}
            onLoad={() => setisLoad(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadNow;
