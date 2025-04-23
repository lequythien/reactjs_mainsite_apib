import React, { useEffect } from "react";

const ShowTin2 = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Tiêu đề */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
        <div className="bg-[#FFF6FA] border-2 border-[#1A2258] rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-[0_4px_0_0_#1A2258] transition-all duration-300">
          <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-[#1A2258] uppercase tracking-tight leading-tight text-center sm:text-left">
            Công ty cổ phần môi giới bảo hiểm An Phúc thông báo thay đổi vốn
            điều lệ
          </h1>
        </div>
      </div>

      {/* Nội dung */}
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
        <div className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-base leading-relaxed text-gray-800 space-y-4">
          <p>
            Ngày 21/02/2025, Bộ Tài chính cấp Giấy phép điều chỉnh số
            96/GPĐC1/KDBH cho phép Công ty cổ phần môi giới bảo hiểm An Phúc
            được điều chỉnh Giấy phép thành lập và hoạt động số 96/GP/KDBH ngày
            03 tháng 4 năm 2024 của Bộ trưởng Bộ Tài chính với nội dung như sau:
            Vốn điều lệ của Công ty cổ phần môi giới bảo hiểm An Phúc là
            6.000.000.000 đồng (Sáu tỷ đồng chẵn).
          </p>
          <p>
            Công ty cổ phần môi giới bảo hiểm An Phúc có địa chỉ tại: Số 141,
            Phố Hoàng Hoa Thám, phường Ngọc Hà, quận Ba Đình, thành phố Hà Nội
          </p>
          <p>Lĩnh vực kinh doanh: Môi giới bảo hiểm</p>
          <p>Phạm vi hoạt động: Trên toàn lãnh thổ Việt Nam</p>
          <p>Thời hạn hoạt động: 50 năm kể từ ngày 03 tháng 04 năm 2024</p>
        </div>
      </div>
    </section>
  );
};

export default ShowTin2;
