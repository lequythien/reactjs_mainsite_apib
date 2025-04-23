import React, { useEffect } from "react";

const ThemeTitle = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="bg-gray-50 min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Tiêu đề */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
        <div className="bg-[#FFF6FA] border-2 border-[#1A2258] rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-[0_4px_0_0_#1A2258] transition-all duration-300">
          <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-[#1A2258] uppercase tracking-tight leading-tight text-left">
            {title}
          </h1>
        </div>
      </div>

      {/* Nội dung */}
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
        <div className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-base leading-relaxed text-gray-800 space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ThemeTitle;
