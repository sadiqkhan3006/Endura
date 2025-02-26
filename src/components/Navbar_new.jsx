import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/enduralogo.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  const navlinks = [
    { id: 1, title: "Endura App", path: "/" },
    { id: 2, title: "Studio", path: "/studio" },
    { id: 3, title: "Trusted By", path: "/trustedby" },
    { id: 4, title: "Contact Us", path: "/contact-us" },
    { id: 5, title: "Get The App", path: "/download" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [menuOpen]);

  return (
    <div className="flex justify-between px-[7%] items-center bg-[#F8F8F7] py-[16px] w-full">
      {/* Logo */}
      <Link to={"/"} className="cursor-pointer">
        <img
          className="w-[60px] md:w-[80px] lg:w-[120px]"
          src={logo}
          alt="logo"
          loading="lazy"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex flex-row items-center gap-x-5 font-Archivo text-[16px] font-medium text-[#000]">
        {navlinks.map((data) => (
          <motion.li
            onClick={() => navigate(data.path)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`
              ${
                location.pathname === data.path && data.id !== 5
                  ? "text-[#DA482C]"
                  : ""
              }
              cursor-pointer ${
                data.id === 5
                  ? "bg-[#DA482C] text-[#F1F0EE] rounded-[30px] px-[20px] py-[10px] cursor-pointer"
                  : "hover:text-[#DA482C] transition-colors duration-[0.5]"
              }`}
            key={data.id}
          >
            {data.title}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden" onClick={() => setMenuOpen(true)}>
        <IoMenu className="text-[30px] md:text-[40px] cursor-pointer" />
      </div>

      {/* Mobile Side Menu (with smooth exit animation) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay (dimmed background) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)} // Close on clicking overlay
            ></motion.div>

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-6"
            >
              {/* Close Button */}
              <RxCross1
                className="absolute top-5 right-5 text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />

              {/* Mobile Menu Items */}
              <ul className="flex flex-col items-center gap-y-5 font-Archivo text-[18px] font-medium">
                {navlinks.map((data) => (
                  <li
                    onClick={() => {
                      navigate(data.path);
                      setMenuOpen(false);
                    }}
                    className={`cursor-pointer ${
                      location.pathname === data.path
                        ? "text-[#DA482C]"
                        : "hover:text-[#DA482C]"
                    } 
                    ${
                      data.id === 5
                        ? "bg-[#DA482C] text-[#F1F0EE] rounded-[30px] px-[20px] py-[10px] cursor-pointer"
                        : "hover:text-[#DA482C] transition-colors duration-[0.5]"
                    }

                    `}
                    key={data.id}
                  >
                    {data.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
