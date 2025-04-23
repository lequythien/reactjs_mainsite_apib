import React from "react";
import Banner from "../assets/images/banner-intro.png";

const Header = () => {
  return (
    <div className="bg-gradient-pink w-full py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-primaryNavy text-2xl md:text-4xl font-extrabold mb-6 leading-snug md:leading-snug">
            CÔNG TY CỔ PHẦN MÔI GIỚI BẢO HIỂM AN PHÚC (APIB)
          </h1>

          <p className="text-primaryNavy text-base md:text-lg leading-relaxed font-normal mb-6 max-w-md mx-auto md:mx-0">
            APIB được thành lập theo giấy phép kinh doanh số 96/KD/KDBH do Bộ
            Tài chính cấp với sứ mệnh cung cấp bảo hiểm toàn diện cho người
            Việt.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#232862] font-extrabold text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 text-sm md:text-base">
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>

        {/* Right: Banner Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Banner}
            alt="Banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
