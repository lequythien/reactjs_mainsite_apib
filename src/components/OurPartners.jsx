import React from "react";
import Img1 from "../assets/images/baoviet.png";
import Img2 from "../assets/images/baominh.png";
import Img3 from "../assets/images/pvi.png";
import Img4 from "../assets/images/mic.png";
import Img5 from "../assets/images/bsh.png";
import Img6 from "../assets/images/vni.png";
import Img7 from "../assets/images/vbi.png";
import Img8 from "../assets/images/pti.png";
import Img9 from "../assets/images/aaa.png";
import Img10 from "../assets/images/pjico.png";
import Img11 from "../assets/images/liberty.png";
import Img12 from "../assets/images/msig.png";

const OurPartners = () => {
  const logos = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
  ];

  return (
    <section className="section-partner bg-primaryNavy py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title */}
        <div className="text-left md:text-center md:mx-[20px] mx-0">
          <h2 className="text-[24px] md:text-[40px] font-extrabold leading-[30px] md:leading-[50px] text-white">
            Đối tác của chúng tôi
          </h2>
          <p className="text-base text-[#f2ebe0] mt-3">
            No underwriting needed to expand coverage with your major life
            milestones
          </p>
        </div>

        {/* Logo Our Partners */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="h-10 sm:h-12 md:h-14 object-contain ml-20"
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
