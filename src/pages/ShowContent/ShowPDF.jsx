import React from "react";
import ThemeTitle from "../../theme/ThemeTitle";
import PDF from "../../assets/pdf/baocaokiemtoanbothuyetminh.pdf";

const ShowPDF = () => {
  // Thêm fallback cho mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <ThemeTitle title="Công ty cổ phần môi giới bảo hiểm An Phúc công bố Báo cáo tài chính đã kiểm toán năm 2024">
      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
        {isMobile ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <p className="text-gray-600 mb-4">
              Trình duyệt của bạn có thể không hiển thị PDF. Vui lòng tải xuống
              file để xem.
            </p>
            <a
              href={PDF}
              download
              className="inline-block bg-[#1A2258] text-white px-4 py-2 rounded-md hover:bg-[#2a3478] transition-colors"
            >
              Tải xuống File PDF Báo cáo tài chính đã kiểm toán năm 2024
            </a>
          </div>
        ) : (
          <iframe
            src={`${PDF}#view=FitH`}
            title="Báo cáo tài chính đã kiểm toán An Phúc 2024"
            className="w-full h-full border-none"
            allowFullScreen
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <p className="text-gray-600 mb-4">
                Trình duyệt của bạn không hỗ trợ hiển thị PDF. Vui lòng tải
                xuống file để xem.
              </p>
              <a
                href={PDF}
                download
                className="inline-block bg-[#1A2258] text-white px-4 py-2 rounded-md hover:bg-[#2a3478] transition-colors"
              >
                Tải xuống Báo cáo tài chính 2024
              </a>
            </div>
          </iframe>
        )}
      </div>
    </ThemeTitle>
  );
};

export default ShowPDF;
