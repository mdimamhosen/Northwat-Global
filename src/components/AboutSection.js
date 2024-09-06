import React from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../assets/image 15.png";
import image2 from "../assets/image 15 (1).png";
import Title from "../utils/Title";
import Button from "../utils/Button";

const AboutSection = () => {
  return (
    <div className="w-11/12 mx-auto mt-16 my-16">
      {/* Left Side: Image + Description */}
      <div className="grid w-11/12 mx-auto grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex justify-center items-center">
          <img
            src={image1}
            alt="Description Image"
            className="max-h-full object-cover rounded-lg shadow-lg"
            style={{ maxHeight: "500px" }} // Adjust max-height as needed
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center">
          <div>
            <Title heading="In USA?" subheading="Why Study" />
          </div>
          <p className="text-gray-600 w-11/12 my-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <h1 className="text-xl font-bold">Quick Facts:</h1>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              Over 4,000 higher education institutions in the USA.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              The USA hosts 11 of the top 20 global universities.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />1 in 5 international
              students choose the USA for higher education.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              More than 50% of international students receive financial aid.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              The USA has over 100 million alumni from its universities.
            </li>
          </ul>
          <Button bgColor="#F6941E" textColor="#fff" text="See More" />
        </div>
      </div>

      {/* Right Side: Image + Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 w-11/12 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <div>
            <Title heading="Careers" subheading="& Industry" />
          </div>
          <p className="text-gray-600 w-11/12 my-6">
            One of the most technologically powerful and dynamic countries, USA
            is the largest & most dominant economy globally. Sectors that
            empower this world’s most productive economy include Healthcare,
            Technology, Construction, Retail, Manufacturing, Finance &
            Insurance, and Real Estate. Top jobs with high remuneration
            prospects for international students include Medicine, Computer &
            Information Systems Managers, Architectural & Engineering Managers,
            and Marketing & Financial Managers. Standard of living in the USA is
            among the highest in the world with high per capita income. This
            nation performs very well in many measures of well-being such as
            income & wealth, health status, jobs and earnings, education &
            skills, and environmental quality.
          </p>
          <Button bgColor="#FFFFFF" textColor="#000000" text="Read More" />
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center">
          <img
            src={image2}
            alt="Description Image"
            className="max-h-full object-cover rounded-lg shadow-lg"
            style={{ maxHeight: "500px" }} // Adjust max-height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
