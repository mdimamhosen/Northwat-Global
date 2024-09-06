import React from "react";
import Heading from "../utils/Heading";

const Offers = [
  {
    title: "Course Duration",
    subtitle: "4 years (Bachelor’s) <br/> 2 years (Master’s)",
  },
  {
    title: "Intake",
    subtitle: "January, May, September",
  },
  {
    title: "Tuition Fee",
    subtitle: "$10,000 - $55,000 per year",
  },
  {
    title: "Living Cost",
    subtitle: "$10,000 - $15,000 per year",
  },
  {
    title: "Work Permit",
    subtitle: "20 hours per week",
  },
  {
    title: "Post-Study Work",
    subtitle: "Up to 3 years (based on course)",
  },
  {
    title: "Scholarships",
    subtitle: "Up to 100% based on merit",
  },
  {
    title: "Part-Time Job",
    subtitle: "On-campus & off-campus available",
  },
  {
    title: "Student Visa",
    subtitle: "F1 Visa (Allows work-study)",
  },
  {
    title: "Accommodation",
    subtitle: "$5,000 - $10,000 per year",
  },
  {
    title: "Health Insurance",
    subtitle: "$1,500 - $2,000 per year",
  },
  {
    title: "Average Stay Back",
    subtitle: "12-36 months depending on degree",
  },
];

const Services = () => {
  return (
    <div className="w-11/12 mx-auto mt-32 mb-12">
      <Heading heading="USA" subheading="At a glance" />
      <div className="grid grid-cols-1 w-11/12 mx-auto  grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {Offers.map((offer, index) => (
          <div key={index} className="  shadow-lg bg-white  text-center">
            <h1 className="bg-[#F6941E] text-white font-bold text-lg p-2  ">
              {offer.title}
            </h1>
            <p
              className="bg-white py-6 px-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: offer.subtitle }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
