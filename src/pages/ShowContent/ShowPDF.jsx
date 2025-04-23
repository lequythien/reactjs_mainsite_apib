import React, { useEffect } from "react";
import PDF from "../../assets/pdf/baocaotaichinhdakiemtoanAnPhuc2024.pdf";

const ShowPDF = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Tiêu đề */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <div className="bg-[#FFF6FA] border-2 border-[#1A2258] rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-[0_4px_0_0_#1A2258] transition-all duration-300">
            <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-[#1A2258] uppercase tracking-tight leading-tight text-center sm:text-left">
              Công ty cổ phần môi giới bảo hiểm An Phúc công bố Báo cáo tài
              chính đã kiểm toán
            </h1>
          </div>
        </div>

        {/* Show File PDF */}
        <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={PDF}
            title="Báo cáo tài chính đã kiểm toán An Phúc 2024"
            className="w-full h-full border-none"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ShowPDF;
