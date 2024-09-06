import React from "react";
import BannerImage from "../assets/18fa1b0402bb762aa970a98c3edb6ca5.png";

const Banner = () => {
  return (
    <div className="  mx-auto my-8 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <div
        className="relative  flex justify-center items-center w-full   min-h-[400px] py-10 md:min-h-[500px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

        {/* Content */}
        <div className="relative  w-11/12 mx-auto z-10 flex justify-between items-center h-full px-4 md:px-16">
          {/* Left side content */}
          <div className="text-white text-3xl md:text-5xl font-bold">
            Study In USA
          </div>

          {/* Right side content (Breadcrumb navigation) */}
          <div className="text-white text-sm md:text-lg">
            Home / Study Destination / USA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
