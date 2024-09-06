import React from "react";
import Heading from "../utils/Heading";
import img1 from "../assets/mingcute_profile-line.svg";
import img2 from "../assets/fluent_device-meeting-room-remote-20-regular.svg";
import img3 from "../assets/wpf_search.svg";
import img4 from "../assets/pepicons-pencil_cv.svg";
import img5 from "../assets/mdi_university-outline.svg";
import img6 from "../assets/carbon_application-web.svg";
import img7 from "../assets/carbon_data-class.svg";
import img8 from "../assets/ri_visa-line.svg";

const processes = [
  { id: 1, title: "Client profile review", image: img1 },
  { id: 2, title: "Onboarding meeting", image: img2 },
  { id: 3, title: "University search", image: img3 },
  { id: 4, title: "Statement of study", image: img4 },
  { id: 5, title: "University shortlist", image: img5 },
  { id: 6, title: "University application", image: img6 },
  { id: 7, title: "Mock interviews", image: img7 },
  { id: 8, title: "Application submit", image: img8 },
];

const ProcessSection = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      {/* Heading */}
      <Heading heading="Our" subheading="Application Process" />

      {/* Subheading */}
      <p className="text-center text-lg text-gray-600 mb-8">
        Follow our step-by-step guide to complete your application process.
      </p>

      {/* Process Grid */}
      <div className="relative w-11/12     mx-auto">
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 relative">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className="relative flex flex-col justify-center items-center"
            >
              <div
                className="flex items-center justify-center  lg:w-20 lg:h-20 w-10 h-10 rounded-full border-2 border-dashed border-gray-400 text-center shadow-lg"
                style={{
                  backgroundColor:
                    index === processes.length - 1 ? "#F6941E" : "#FFFFFF",
                }}
              >
                <img
                  src={process.image}
                  alt={process.title}
                  className="lg:h-12 h-6 w-6 lg:w-12 object-cover"
                />
              </div>

              <h3 className="border p-1 border-dashed font-semibold text-gray-800 mt-4 text-center text-[8px] md:text-base lg:text-lg">
                {process.title}
              </h3>

              {/* Connecting Line */}
              {index < processes.length - 1 && (
                <div className="absolute top-1/2 right-0 hidden lg:flex lg:w-[60%] h-0.5 border-t-2 border-dashed border-gray-400 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
