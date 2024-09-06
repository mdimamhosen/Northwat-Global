import React from "react";

const Title = ({ heading, subheading }) => {
  return (
    <div className="text-left   ">
      <h1 className="text-4xl font-bold">
        <span className="text-[#F6941E]">{heading}</span>
        <span className="text-[#1E1E1E]"> {subheading}</span>
      </h1>
    </div>
  );
};

export default Title;
