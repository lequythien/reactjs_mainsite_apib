import React from "react";
import Banner from "../assets/images/banner-home.png";

const DigitalPlatform = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tiêu đề */}
        <h2 className="text-[24px] md:text-[40px] font-extrabold text-primaryNavy leading-[34px] md:leading-[51px] w-auto md:w-[580px] md:mx-auto">
          Nền tảng số ưu việt
        </h2>

        {/* Mô tả */}
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto sm:text-lg font-medium text-[#2C2D2F] mt-4 sm:mb-8 lg:mb-10 space-y-2">
          <p>
            APIB tự hào sở hữu nền tảng công nghệ tiên tiến, cho phép khách hàng
            dễ dàng tìm kiếm, so sánh và lựa chọn các sản phẩm bảo hiểm từ nhiều
            công ty uy tín.
          </p>
        </div>

        {/* Hình ảnh minh họa */}
        <div className="flex justify-center">
          <img
            src={Banner}
            alt="Digital Platform Illustration"
            className="w-full max-w-xs sm:max-w-md lg:max-w-3xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatform;
