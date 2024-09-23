"use client";
import { useState } from "react";

const AccordionCheckout = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="border-b border-gray-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full transition-all text-left py-5 font-medium text-gray-700 focus:outline-none flex justify-between py-5 items-center ${
            isOpen ? " text-[#FF932F]" : " text-[#191919]"
          }`}
        >
          <span
            className={`${
              isOpen ? "text-[#FF932F]" : "text-[#191919]"
            } font-semibold transition-all text-[20px]`}
          >
            {title}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180 text-[#FF932F]" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p className=" text-[#8893AC] text-[16px] md:text-[18px] font-[400] pb-5">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionCheckout;
