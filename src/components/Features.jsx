import React from "react";
import people from "../assets/people.svg";
import videoVC from "../assets/video.svg";
import screen1 from "../assets/Screen_1.png";
import interface1 from "../assets/interface.jpg";
import workout from "../assets/Workout.png";
import info from "../assets/info_workout.png";
export const Features = () => {
  return (
    <div id="Features" className="mx-[6%] mb-[60px] lg:mb-[160px]">
      <div className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px] ">
        <div className="text-center font-Poppins  text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]  ">
          App Features
        </div>
        <div
          className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold
        uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px] "
        >
          Feel the best experince with our features
        </div>
        <div className="flex flex-col lg:flex-row gap-x-[24px] gap-y-[32px]   ">
          <div className="px-[32px] lg:px-[45px] pb-[200px] md:pb-[450px] pt-[32px] lg:pt-[45px] bg-[#F8F8F7] rounded-[32px] relative overflow-hidden ">
            <div className="mb-[24px] md:mb-[40px] lg:mb-[50px] w-[48px] h-[48px] md:w-[72px] md:h-[72px] ">
              <img src={people} alt="people" />
            </div>
            <div className=" mb-[16px] md:mb-[20px] leading-[24px] md:leading-[36px] lg:leading-[40px] font-Poppins  text-[#171717] text-[20px] md:text-[32px] lg:text-[36px] font-medium ">
              Level Up Your Journey: Connect with Top-Tier Trainers &
              Nutritionists
            </div>
            <div className="  mb-[16px] md:mb-[46px] leading-[20px] md:leading-[33.68px] font-Poppins  text-[#7D7D7D] text-[16px]  md:text-[24px] font-normal  ">
              Get personalized guidance, expert advice, and tailored workout
              plans – all conveniently within the app. No more guesswork, just
              results.
            </div>
            <div className="absolute w-[155px] h-[316px] md:w-[335px] md:h-[680px] right-[12%] -bottom-[25%] md:-bottom-[45%] z-20">
              <img src={screen1} />
            </div>
            <div className="absolute w-[155px] h-[316px] md:w-[335px] md:h-[680px] left-[12%] z-10">
              <img src={interface1} />
            </div>
          </div>
          <div className="px-[32px] lg:px-[45px] pb-[200px] md:pb-[450px] pt-[32px] lg:pt-[45px] bg-[#F8F8F7] rounded-[32px] relative overflow-hidden ">
            <div className="mb-[24px] md:mb-[40px] lg:mb-[50px] w-[48px] h-[48px] md:w-[72px] md:h-[72px]">
              <img src={videoVC} alt="people" />
            </div>
            <div className=" mb-[16px] md:mb-[20px] leading-[24px] md:leading-[36px] lg:leading-[40px] font-Poppins  text-[#171717] text-[20px] md:text-[32px] lg:text-[36px] font-medium ">
              Start Your Workout Now: Stream Pre-Recorded Sessions from Top
              Trainers
            </div>
            <div className="mb-[16px] md:mb-[46px] leading-[20px] md:leading-[33.68px] font-Poppins  text-[#7D7D7D] text-[16px]  md:text-[24px] font-normal   ">
              Stream sessions that fit your schedule and fitness goals, all from
              the convenience of the app. Get started on your fitness journey
              now!
            </div>
            <div className=" absolute w-[155px] h-[316px] md:w-[335px] md:h-[680px] z-10">
              <img src={workout} />
            </div>
            <div className=" absolute w-[335px] h-[680px] z-20 left-[40%] top-[65%] md:top-[55%]">
              <img src={info} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
