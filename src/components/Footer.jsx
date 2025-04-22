import React from "react";
import bocongthuong from "../assets/images/bocongthuong-2.png";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white pt-8 pb-4 border-t border-pink-200">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-6">
        {/* Main Information Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Company Details */}
          <div className="text-sm text-[#1E1E1E] space-y-4 w-full lg:w-2/3">
            <h2 className="text-[15px] font-bold text-primaryNavy mb-2">
              CÔNG TY CỔ PHẦN MÔI GIỚI BẢO HIỂM AN PHÚC
            </h2>
            <p className="text-[14px] font-medium text-[#2C2D2F]">
              SĐT:
              <a
                href="tel:0889996688"
                className="font-semibold text-primaryPink ml-1 hover:underline"
                aria-label="Call us at 088 999 6688"
              >
                088 999 6688
              </a>
            </p>
            <p className="text-[14px] font-medium text-[#2C2D2F]">
              Email:
              <a
                href="mailto:support.insurego@gmail.com"
                className="font-semibold text-primaryPink ml-1 hover:underline"
                aria-label="Email us at support.insurego@gmail.com"
              >
                support.insurego@gmail.com
              </a>
            </p>
            <p className="text-[15px] font-medium text-[#2C2D2F]">
              Mã số doanh nghiệp 0110707592
            </p>
            <p className="text-[15px] font-medium text-[#2C2D2F]">
              Địa chỉ: Số 141 Hoàng Hoa Thám, P. Ngọc Hà, Q. Ba Đình, Tp. Hà Nội
            </p>
          </div>

          {/* Bộ Công Thương Logo (Desktop Only) */}
          <div className="hidden md:flex w-full lg:w-auto justify-end lg:justify-end">
            <img
              src={bocongthuong}
              alt="Đã thông báo với Bộ Công Thương"
              className="h-[52px] md:h-[75px] ml-auto md:ml-0 w-auto"
              aria-label="Certified by the Ministry of Industry and Trade"
            />
          </div>
        </div>

        {/* Social Links and Logo (Mobile Only) */}
        <div className="flex md:hidden justify-between items-center w-full mt-4">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF2C92] text-white hover:bg-[#E02582] transition-colors"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[27px] h-[27px] flex rounded-full bg-[#FFF5FA] hover:bg-[#FFE5F0] transition-colors"
              aria-label="Contact us on Zalo"
            >
              <SiZalo className="text-primaryPink m-auto" size={16} />
            </a>
          </div>

          {/* Bộ Công Thương Logo (Mobile) */}
          <div>
            <img
              src={bocongthuong}
              alt="Đã thông báo với Bộ Công Thương"
              className="h-14 object-contain"
              aria-label="Certified by the Ministry of Industry and Trade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
