import React from "react";
import ThemeTitle from "../../theme/ThemeTitle";
import PDF from "../../assets/pdf/baocaokiemtoanbothuyetminh.pdf";

const ShowPDF = () => {
  return (
    <ThemeTitle title="2024">
      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={PDF}
          title="Báo cáo tài chính đã kiểm toán An Phúc 2024"
          className="w-full h-full border-none"
          allowFullScreen
        />
      </div>
    </ThemeTitle>
  );
};

export default ShowPDF;
