import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div>
      <div className=" mt-[100px] mx-[6%] mb-[60px] lg:mb-[160px]">
        <div className="flex flex-col items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[35px] ">
          <div className="text-center font-Poppins  text-[#171717] text-[20px] md:text-[23px] font-normal leading-[30px]  ">
            Effective Date: November 4, 2024
          </div>
          <div
            className="font-Archivo text-[#171717] text-center text-[24px] md:text-[36px] lg:text-[48px] font-extrabold
        uppercase leading-[28px] md:leading-[42px] lg:leading-[56px] max-w-[902px] "
          >
            Endura Fitness Privacy Policy
          </div>
        </div>
        <div className="flex flex-col gap-y-[32px] mt-[32px]">
          <p className=" flex flex-col gap-y-3 list-disc  text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
            Endura Fitness ("we," "us," or "our") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, and share the information you
            provide through our mobile application, Endura Fitness ("the App")
          </p>
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Information We Collect:
            </h1>
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              1. Required Information
            </h2>
            <ul className=" flex flex-col gap-y-3 pl-10 list-disc  text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              <li>Name</li>
              <li>Email</li>
              <li>Phone NUmber</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              2. Optional Information
            </h2>
            <ul className=" flex flex-col gap-y-3 pl-10 list-disc  text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              <li>Weight</li>
              <li>Height</li>
              <li>Age</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              3. Payment Information:
            </h2>
            <ul className=" flex flex-col gap-y-3 pl-10 list-disc  text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              <li>
                We may collect payment details to facilitate purchases of
                subscriptions within the App. Payment processing is securely
                handled by third-party payment processors in compliance with
                industry standards.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-[32px] mt-[32px]">
          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              How We Use Your Information:
            </h1>
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              1. Account Creation and Management
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              Your name, email, and phone number are used to create and manage
              your account and communicate important updates about your account
              or the App.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              2. App Personalization
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              Optional information like weight, height, and age is used to
              personalize your fitness experience and offer tailored
              recommendations.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              3. Service Improvement:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              We may use your data to analyze usage patterns, enhance our App’s
              functionality, and improve our services.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              4. Marketing:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              We may send promotional emails about new features, updates, and
              offers, but you can opt out of these communications at any time.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Refund Policy:
            </h1>
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              Subscription Purchases and Refunds
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              All purchases made within the Endura Fitness app are final, and we
              do not provide refunds once a subscription has been purchased.
              This policy applies to all subscription types, including monthly,
              annual, or promotional packages.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Your Rights:
            </h1>

            <p className="text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              You have the right to access, correct, or delete your personal
              information. If you have any questions about your data or wish to
              exercise your rights, please contact us at{" "}
              <a
                className="font-semibold text-[#DA482C] underline   "
                href="mailto:info@endurafitness.in"
              >
                info@endurafitness.in
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Changes to this Policy:
            </h1>

            <p className="text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              We may update this Privacy Policy periodically. We encourage you
              to review it regularly for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
