import React from "react";
import Banner from "../assets/images/banner-intro.png";

const Header = () => {
  return (
    <div className="bg-gradient-pink w-full py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-primaryNavy text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Bảo hiểm An phúc
          </h1>
          <p className="text-primaryNavy text-base font-normal mb-8 max-w-md mx-auto md:mx-0">
            APIB thành lập năm 2013 với mục tiêu trở thành nhà môi giới bảo hiểm
            trên nền tảng số hàng đầu Việt Nam.
          </p>
          <button className="mt-3 lg:mt-0 bg-[#232862] font-extrabold text-white px-8 py-2 sm:py-2 lg:py-2 rounded-full hover:bg-blue-700 transition-all duration-200 text-xs sm:text-sm lg:text-base">
            TÌM HIỂU THÊM
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 max-w-md md:max-w-lg">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
