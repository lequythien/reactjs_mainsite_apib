import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
