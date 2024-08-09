import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import signup from "../assets/signup.png";
export const SIgnup = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [sex, setSex] = useState("");
  const [city, setCity] = useState("");
  const signupForm = useRef();
  const resetForm = () => {
    setName("");
    setEmail("");
    setContact("");
    setSex("");
    setCity("");
  };
  async function Submit(e) {
    const toastId = toast.loading("Loading...");
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(signupForm.current);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxJtuZ8XXbQG4TVm0I4JS9giTB_H1-iEr2H9pdu8eFIw69WU7ux8ImGIttGt5soVMv8PA/exec",
      {
        method: "Post",
        body: formData,
      }
    );
    if (!response.ok) {
      toast.error("Something went wrong..");
    } else {
      toast.success("Signup Successfull");
    }
    resetForm();
    setLoading(false);
    toast.dismiss(toastId);
    // console.log(formData);
    // console.log("Form Resposne: ", response);
  }
  return (
    <div className="mt-[120px] mb-[24px] md:mb-[40px] lg:mb-[80px] px-[32px] flex flex-col-reverse lg:flex-row gap-x-[32px] items-center ">
      <form
        onSubmit={(e) => {
          Submit(e);
        }}
        ref={signupForm}
        className="flex flex-col w-full  bg-white px-[8px] py-[24px] md:p-[32px]  lg:px-[64px] lg:py-0
       "
      >
        <div className="mb-[32px]">
          <div className="text-[#171717] font-Inter   text-[32px] leading-[35px] md:text-[36px] md:leading-[39px] lg:text-[40px] lg:leading-[44px] font-bold   ">
            Sign up
          </div>
          <div className="text-[#7D7D7D] font-Inter   text-[18px] font-normal    leading-[27px] mt-[12px]">
            Sign up for early acces
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className="text-[#7D7D7D] font-Inter   text-[14px] font-medium   leading-[21px] -mb-[10px] relative pl-3 "
            >
              <span className="bg-white  z-10">
                Your Name<span className="text-[#FF5A33] ">*</span>
              </span>
            </label>
            <input
              className=" border-[1.5px] border-[#E4E2DE] border-solid font-Inter  p-3  focus:outline-none  rounded-[10px]  placeholder:font-extralight input-field
              text-lg   "
              type="text"
              name="Name"
              id="name"
              placeholder="John Doe"
              required="true"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#7D7D7D] font-Inter   text-[14px] font-medium   leading-[21px] -mb-[10px] relative pl-3"
              htmlFor="email"
            >
              <span className="bg-white  z-10">
                Email<span className="text-[#FF5A33] ">*</span>
              </span>
            </label>
            <input
              className="border-[1.5px] border-[#E4E2DE] border-solid font-Inter  text-lg  rounded-[10px] focus:outline-none p-3 placeholder:font-extralight input-field"
              type="email"
              name="Email"
              id="email"
              placeholder="johndoe123@gmail.com"
              required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            {/* <label
              className="text-xl font-light text-[#281D49]"
              htmlFor="contact"
            >
              Contact<span className="text-[#FF5A33] ">*</span>
            </label> */}
            <input
              className="border-[1.5px] border-[#E4E2DE] border-solid font-Inter text-lg  rounded-[10px] focus:outline-none p-3 placeholder:font-extralight input-field"
              type="text"
              name="Contact"
              id="contact"
              placeholder="Contact"
              required="true"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            {/* <label className="text-xl font-light text-[#281D49]" htmlFor="sex">
              Sex<span className="text-[#FF5A33] ">*</span>
            </label> */}
            <input
              className="border-[1.5px] border-[#E4E2DE] border-solid font-Inter rounded-[10px] text-lg focus:outline-none  p-3 placeholder:font-extralight input-field"
              type="text"
              name="Sex"
              id="sex"
              placeholder="Sex"
              required="true"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            {/* <label className="text-xl font-light text-[#281D49]" htmlFor="sex">
              Sex<span className="text-[#FF5A33] ">*</span>
            </label> */}
            <input
              className="border-[1.5px] border-[#E4E2DE] border-solid font-Inter rounded-[10px] text-lg focus:outline-none  p-3 placeholder:font-extralight input-field"
              type="text"
              name="City"
              id="City"
              placeholder="City"
              required="true"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-[#c97e70]" : "bg-[#DA482C]"
          }  px-[20px] py-[10px]   mt-[20px]  rounded-[30px] 
          text-[#F1F0EE] text-[16px] flex items-center font-Archivo font-medium  justify-center  h-[56px]`}
        >
          {loading ? "Loading..." : "Signup ->"}
        </button>
      </form>
      <div className="w-full h-full">
        <img className="w-full md:h-[550px] lg:h-full" src={signup} />
      </div>
    </div>
  );
};
