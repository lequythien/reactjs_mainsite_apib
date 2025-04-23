import React from "react";
import Img1 from "../assets/images/baoviet.png";
import Img2 from "../assets/images/pvi.png";
import Img3 from "../assets/images/mic.png";
import Img4 from "../assets/images/pjico.png";

const OurPartners = () => {
  const logos = [
    { src: Img1, alt: "Bảo Việt" },
    { src: Img2, alt: "PVI" },
    { src: Img3, alt: "MIC" },
    { src: Img4, alt: "PJICO" },
  ];

  return (
    <section className="bg-primaryNavy py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Đối tác của chúng tôi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#f2ebe0] max-w-2xl mx-auto">
            Hợp tác cùng các đối tác hàng đầu để mang đến giải pháp bảo hiểm tối
            ưu cho mọi cột mốc quan trọng trong cuộc sống.
          </p>
        </div>

        {/* Logo Our Partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-16 md:h-20 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
