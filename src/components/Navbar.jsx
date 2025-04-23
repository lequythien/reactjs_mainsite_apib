import React, { useState } from "react";
import Logo from "../assets/images/logo_full_white.png";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primaryPink">
      <div className="flex items-center justify-between py-4 px-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Menu Icon Mobile */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose /> : <FiMenu />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-3 lg:gap-6 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 transition-all duration-300 ease-in-out`}
        >
          <NavLink
            to="/home"
            className="text-black lg:text-white font-extrabold hover:text-primaryPink lg:hover:text-yellow-300 text-xs sm:text-sm lg:text-base transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            TRANG CHỦ
          </NavLink>
          <NavLink
            to="/about"
            className="text-black lg:text-white font-extrabold hover:text-primaryPink lg:hover:text-yellow-300 text-xs sm:text-sm lg:text-base transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            GIỚI THIỆU
          </NavLink>
          <NavLink
            to="/news"
            className="text-black lg:text-white font-extrabold hover:text-primaryPink lg:hover:text-yellow-300 text-xs sm:text-sm lg:text-base transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            TIN TỨC
          </NavLink>
          <NavLink
            to="#"
            className="text-black lg:text-white font-extrabold hover:text-primaryPink lg:hover:text-yellow-300 text-xs sm:text-sm lg:text-base transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            TUYỂN DỤNG
          </NavLink>

          {/* Contact Button */}
          <button
            className="mt-0 ml-0 lg:ml-4 bg-[#232862] hover:bg-[#1b1f4a] shadow-none hover:shadow-md font-bold text-white px-8 py-2 sm:py-2 lg:py-2 rounded-full transition-all duration-200 text-xs sm:text-sm lg:text-base"
            onClick={() => setIsOpen(false)}
          >
            LIÊN HỆ VỚI CHÚNG TÔI
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
