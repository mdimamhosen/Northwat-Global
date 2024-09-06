import React, { useState } from "react";
import { FaBars, FaTimes, FaLongArrowAltRight } from "react-icons/fa";
import logo from "../assets/Logo.png";

const countries = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "New Zealand",
  "Germany",
  "France",
  "Ireland",
  "Italy",
  "Spain",
  "Sweden",
  "Netherlands",
  "Switzerland",
  "Denmark",
  "Norway",
  "Finland",
  "Poland",
  "Belgium",
  "Austria",
  "Portugal",
  "Czech Republic",
  "Hungary",
  "Slovakia",
  "Lithuania",
  "Latvia",
  "Estonia",
  "Cyprus",
  "Malta",
  "Bulgaria",
  "Romania",
  "Greece",
  "Turkey",
  "Russia",
  "Ukraine",
  "Georgia",
  "Armenia",
  "Azerbaijan",
  "Kazakhstan",
  "Uzbekistan",
  "Kyrgyzstan",
  "Tajikistan",
  "Turkmenistan",
  "China",
  "Japan",
  "South Korea",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Indonesia",
  "Philippines",
  "Nepal",
  "Sri Lanka",
  "Bangladesh",
  "Pakistan",
  "India",
  "Bhutan",
  "Maldives",
  "Mauritius",
  "South Africa",
  "Kenya",
  "Nigeria",
  "Ghana",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Zambia",
  "Zimbabwe",
  "Namibia",
  "Botswana",
  "Mozambique",
  "Angola",
  "Ethiopia",
  "Morocco",
  "Egypt",
  "Tunisia",
  "Algeria",
  "Libya",
  "Sudan",
  "South Sudan",
  "Somalia",
  "Eritrea",
  "Djibouti",
  "Senegal",
  "Mali",
  "Burkina Faso",
  "Ivory Coast",
  "Guinea",
  "Sierra Leone",
  "Liberia",
  "Gambia",
  "Guinea-Bissau",
  "Cape Verde",
  "Mauritania",
  "Togo",
  "Benin",
  "Niger",
  "Chad",
  "Central African Republic",
  "Cameroon",
  "Gabon",
  "Equatorial Guinea",
  "Sao Tome and Principe",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-11/12 mx-auto">
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">
        <div>
          <img src={logo} alt="Logo" className="w-32" />
        </div>

        <div className="hidden lg:flex w-[80%] justify-between items-center space-x-6 text-[#1e1e1e]">
          <a
            href="#"
            className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
          >
            About Us
          </a>

          <div className="relative group">
            <button className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out">
              Study Destination
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md p-4 z-10 overflow-y-auto max-h-60 w-64 transition-opacity duration-300 ease-in-out">
              <ul className="space-y-2">
                {countries.map((country, index) => (
                  <li
                    key={index}
                    className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
                  >
                    <a href="#">{country}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out">
              Gallery
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md p-4 z-10 transition-opacity duration-300 ease-in-out">
              <ul className="space-y-2">
                {[
                  "Student Life",
                  "Campus",
                  "Events",
                  "Graduation",
                  "Alumni",
                  "Videos",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
                  >
                    <a href="#">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#"
            className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
          >
            Blogs
          </a>
          <a
            href="#"
            className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
          <button className="flex w-fit items-center px-6 scale-105 transition-all duration-300 ease-linear py-2 shadow-md font-semibold bg-white text-[#F6941E] border border-[#F6941E] hover:bg-opacity-80">
            Enquire Now
            <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>

        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-2xl text-[#1e1e1e]"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 z-30 w-64 bg-slate-100 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } h-full overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-[#1e1e1e]">
          <li>
            <a
              href="#"
              className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-400 font-bold text-gray-500 transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </li>
          <li>
            <button className="flex w-fit items-center px-6 scale-105 transition-all duration-300 ease-linear py-2 shadow-md font-semibold bg-white text-[#F6941E] border border-[#F6941E] hover:bg-opacity-80">
              Enquire Now
              <FaLongArrowAltRight className="ml-2" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
