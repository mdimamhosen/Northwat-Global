import React from "react";
import Heading from "../utils/Heading";
import image1 from "../assets/image 17.png";
import image2 from "../assets/image 17 (1).png";
import image3 from "../assets/image 17 (2).png";
import image4 from "../assets/image 17 (3).png";
import image5 from "../assets/image 17 (4).png";
import image6 from "../assets/image 17 (5).png";

import backgroundImage from "../assets/cambridge.png";

const universities = [
  {
    heading: "University of Toronto",
    image: image1,
  },
  {
    heading: "Harvard University",
    image: image2,
  },
  {
    heading: "University of Oxford",
    image: image3,
  },
  {
    heading: "Stanford University",
    image: image4,
  },
  {
    heading: "Massachusetts Institute of Technology",
    image: image5,
  },
  {
    heading: "University of Cambridge",
    image: image6,
  },
];

const PopularUniversities = () => {
  return (
    <div
      className="relative w-full py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for blackish effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative w-11/12 mx-auto text-white">
        <div className="text-center   ">
          <h1 className="text-4xl font-bold">
            <span className="text-[#F6941E]">Popular</span>
            <span className="text-[#ffffff]"> Universities</span>
          </h1>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 w-11/12 mx-auto grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-lg rounded-lg p-6 bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={university.image}
                alt={university.heading}
                className="  object-cover rounded-t-lg"
              />
              <h2 className="mt-4 text-lg font-bold">{university.heading}</h2>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="border border-white text-white px-6 py-2  transition-all duration-300 ease-linear hover:bg-white hover:text-black  ">
            View More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularUniversities;
