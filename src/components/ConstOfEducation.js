import React from "react";
import image from "../assets/image 15 (2).png";
import Heading from "../utils/Heading";
import Title from "../utils/Title";

const CostOfEducation = () => {
  return (
    <div className="w-11/12 mx-auto  mt-32 mb-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8 w-11/12 mx-auto">
        {/* Image Section */}
        <div>
          <img
            src={image}
            alt="Education Costs"
            className="w-full h-auto max-h-96  "
          />
        </div>

        {/* Text Section */}
        <div>
          <Title heading="Cost" subheading="of Education" />
          <p className="mt-4 text-gray-700">
            In the U.S., tuition fees vary based on the state, the university
            funding model, and the student’s country of origin. So, listing an
            average is a rather difficult task. However, thanks to the folks at
            College Board, they’ve rendered an estimate of last year’s average
            tuition costs, which will roughly reflect the next few years. Here’s
            a breakdown of the average tuition fees for the 2019-2020 academic
            year:
          </p>
          <ul className="mt-4">
            <li className="text-lg font-semibold">
              Total Expenses: <span className="text-[#F6941E]">$26,590</span>
            </li>
            <li className="mt-2 text-gray-800">
              Tuition Fees for one-year (Indicative): $25,000
            </li>
            <li className="mt-2 text-gray-800">Living Expenses: $11,140</li>
            <li className="mt-2 text-gray-800">Books and Supplies: $1,240</li>
            <li className="mt-2 text-gray-800">Health Insurance: $2,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostOfEducation;
