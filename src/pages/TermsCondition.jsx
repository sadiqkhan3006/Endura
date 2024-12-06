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
            Terms and Conditions
          </div>
        </div>
        <div className="flex flex-col gap-y-[32px] mt-[32px]">
          <p className=" flex flex-col gap-y-3 list-disc  text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
            Welcome to Endura Fitness ("the App"). By using our App, you agree
            to comply with and be bound by these Terms and Conditions ("Terms").
            If you do not agree to these Terms, please do not use the App.
          </p>
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Account Registration:
            </h1>
            <p className=" flex flex-col gap-y-3 list-disc  text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              To access the App’s features, you may need to register an account
              and provide certain personal information (name, email, phone
              number). You are responsible for maintaining the confidentiality
              of your account information and are fully responsible for all
              activities under your account.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[32px] mt-[32px]">
          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Use of the App:
            </h1>
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              1. General Usage:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              The App is open to all users without any age restriction. However,
              users under 18 may consider using the App under parental
              supervision, especially when accessing health-related content.
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px] ">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              2. Prohibited Activities:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              You may not misuse the App by introducing viruses, hacking, or
              engaging in any illegal activity.
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Subscription Purchases and Payments:
            </h1>
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              1. Purchasing Subscriptions:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              Payment is required to access certain features or content. By
              purchasing a subscription, you agree to provide accurate payment
              details and authorize us or our payment processors to charge your
              chosen payment method.
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px] ">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              2. Subscription Access:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              Once you complete your subscription purchase, you will have access
              to paid content as long as your subscription is active.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h2 className="  font-Archivo  text-[#181A2A] text-[16px] leading-[18px] md:text-[18px] md:leading-[22px]  lg:text-[24px] lg:leading-[34px]  font-semibold  ">
              3. Non-Refundable Subscriptions:
            </h2>
            <p className=" flex flex-col gap-y-3   text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              All purchases are final, and we do not provide refunds once a
              subscription has been purchased.
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Modifications and Termination:
            </h1>

            <p className="text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              We reserve the right to modify or discontinue the App or any part
              of it, with or without notice, at any time. We may also suspend or
              terminate your access to the App for violating these Terms or
              engaging in unauthorized activities. Liability Disclaimer: Endura
              Fitness and its affiliates are not liable for any damages or
              losses resulting from your use of the App. We provide the App
              "as-is" and disclaim all warranties of any kind, whether express
              or implied.
            </p>
          </div>
          <div className="flex flex-col gap-y-[16px] ">
            <h1 className="font-Archivo  text-[#181A2A] text-[18px] leading-[22px] md:text-[20px] md:leading-[24px]  lg:text-[32px] lg:leading-[36px] font-semibold  ">
              Changes to Terms:
            </h1>

            <p className="text-[16px] leading-[20px] md:text-[18px]  lg:text-[20px] md:leading-[24px]   font-Poppins  text-[#7D7D7D] font-normal ">
              We reserve the right to update these Terms at any time. Continued
              use of the App constitutes acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
