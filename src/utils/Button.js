import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ bgColor, text }) => {
  return (
    <button
      className={`flex w-fit items-center px-6 scale-105 transition-all duration-300 ease-linear py-2   shadow-md font-semibold   bg-[${bgColor}] hover:bg-opacity-80 ${
        bgColor === "#F6941E"
          ? "text-white"
          : "text-black border border-[#F6941E]"
      }`}
    >
      {text}
      <FaLongArrowAltRight className="ml-2" />
    </button>
  );
};

export default Button;
