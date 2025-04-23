import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/img-1.jpg";
import Img2 from "../assets/images/img-2.jpg";

const newsData = [
  {
    img: Img1,
    title:
      "Công ty cổ phần môi giới bảo hiểm An Phúc công bố Báo cáo tài chính đã kiểm toán",
    update: "31/03/2025",
    pdfFile: "baocaotaichinhdakiemtoanAnPhuc2024.pdf",
  },
  {
    img: Img2,
    title:
      "Công ty cổ phần môi giới bảo hiểm An Phúc thông báo thay đổi vốn điều lệ",
    update: "05/03/2025",
  },
];

const Information = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Tiêu đề */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A2258] leading-tight md:leading-[51px] w-full md:w-[580px] mx-auto">
            Công bố thông tin APIB
          </h2>
          <p className="w-full sm:w-3/4 lg:w-1/2 mx-auto text-sm sm:text-base md:text-lg font-medium text-[#2C2D2F] mt-3 sm:mt-4 lg:mt-5">
            Công bố thông tin liên quan hoạt động của APIB
          </p>
        </div>

        {/* Danh sách tin tức */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              {item.pdfFile ? (
                <Link
                  to={`/pdf/${item.pdfFile}`}
                  className="block cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-bold text-[#272c65] leading-snug mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-[#272c65] block">
                      Ngày cập nhật: {item.update}
                    </span>
                  </div>
                </Link>
              ) : (
                <Link to="/new2" className="block cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-bold text-[#272c65] leading-snug mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-[#272c65] block">
                      Ngày cập nhật: {item.update}
                    </span>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;
