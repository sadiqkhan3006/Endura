import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import logo from "../assets/enduralogo.svg";
import {
  Link,
  Navigate,
  matchPath,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  const navlinks = [
    { id: 1, title: "Home", path: "/" },
    {
      id: 2,
      title: "Features",
      path: "#Features",
    },
    { id: 3, title: "Team", path: "#Team" },
    { id: 4, title: "Trusted By", path: "/trustedby" },
  ];
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div>
      <nav
        className={`${
          menuOpen ? "status" : ""
        } top-0 fixed z-40 w-full min-h-[66px]     bg-[#F8F8F7] bg-opacity-[100%] lg:h-[96px] flex flex-row navbarStyle`}
      >
        <div className="ml-[7%] mr-[7%] lg:items-center  flex flex-col gap-y-5 lg:flex-row w-full justify-between text-2xl">
          <div className="font-bold   mt-5 lg:mt-0 text-[#DA482C]  hover:text-[#DA482C]  transition-colors  delay-75 duration-150 ease-in  cursor-pointer font-Poppins  ">
            <Link to="/">
              <img
                className="w-[60px] md:w-[80px] lg:w-[120px]"
                src={logo}
                alt="endura."
              />
            </Link>
          </div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden "
            }   gap-y-5 mb-5 lg:mb-0 lg:ml-0  lg:flex flex-col lg:flex-row gap-x-[34px] items-center  text-[16px] leading-5  font-Archivo   font-medium     text-black`}
          >
            {navlinks.map((item) => (
              <li
                onClick={() => {
                  setmenuOpen(false);
                  const element = document.getElementById(item.title);
                  matchRoute("/")
                    ? item.id === 4
                      ? navigate("/trustedby")
                      : element.scrollIntoView({ behavior: "smooth" })
                    : navigate("/");
                }}
                key={item.id}
                className={`${
                  matchRoute(item.path) ? "text-[#DA482C]" : ""
                } hover:text-[#DA482C] cursor-pointer transition-colors  delay-75 duration-150 ease-in`}
              >
                <div>{item.title}</div>
                {/* <Link to={`${item.path}`}>{item.title}</Link> */}
              </li>
            ))}
            <div
              onClick={() => {
                setmenuOpen(false);
                navigate("/signup");
              }}
              className="bg-[#DA482C] text-[#F1F0EE] rounded-[30px] px-[20px] py-[10px] cursor-pointer"
            >
              Get the App
            </div>
          </ul>
        </div>
        <div
          onClick={() => {
            setmenuOpen((prev) => !prev);
          }}
          className="lg:hidden text-3xl mt-5 mr-[7%]"
        >
          {menuOpen ? <RxCross1 /> : <IoMenu />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
