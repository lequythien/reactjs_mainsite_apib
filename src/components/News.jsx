import React from "react";
import Img1 from "../assets/images/img-1.jpg";
import Img2 from "../assets/images/img-2.jpg";
import Img3 from "../assets/images/img-3.jpg";

const newsData = [
  {
    img: Img1,
    title: "Cập nhật thông tin quy hoạch Lộc Bình tỉnh Lạng Sơn mới nhất",
    time: "19 giờ trước",
    description:
      "Tham khảo thông tin mới nhất về cập nhật bản đồ quy hoạch huyện Lộc Bình để biết thêm về quy...",
  },
  {
    img: Img2,
    title: "Cập nhật thông tin quy hoạch Lộc Bình tỉnh Lạng Sơn mới nhất",
    time: "19 giờ trước",
    description:
      "Tham khảo thông tin mới nhất về cập nhật bản đồ quy hoạch huyện Lộc Bình để biết thêm về quy...",
  },
  {
    img: Img3,
    title: "Cập nhật thông tin quy hoạch Lộc Bình tỉnh Lạng Sơn mới nhất",
    time: "19 giờ trước",
    description:
      "Tham khảo thông tin mới nhất về cập nhật bản đồ quy hoạch huyện Lộc Bình để biết thêm về quy...",
  },
];

const News = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[40px] font-extrabold text-primaryNavy leading-[34px] md:leading-[51px] w-auto md:w-[580px] md:mx-auto">
            Tin tức APIB
          </h2>
          <p className="w-full sm:w-3/4 lg:w-1/2 mx-auto sm:text-lg font-medium text-[#2C2D2F] mt-4 sm:mb-8 lg:mb-10 space-y-2">
            Tin tức liên quan tới hoạt động của APIB
          </p>
        </div>

        {/* Danh sách tin tức */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-[#272c65] leading-snug mb-2">
                {item.title}
              </h3>
              <span className="text-sm text-[#272c65] block mb-1">
                {item.time}
              </span>
              <p className="text-sm text-[#272c65]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Nút xem thêm */}
        <div className="flex justify-center">
          <button className="mt-3 lg:mt-0 ml-0 lg:ml-4 bg-[#232862] font-extrabold text-white px-8 py-2 sm:py-2 lg:py-2 rounded-full hover:bg-blue-700 transition-all duration-200 text-sm">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
