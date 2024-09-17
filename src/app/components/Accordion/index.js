import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:max-w-md mx-auto">
      <div className="border-b border-gray-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full transition-all text-left py-5 font-medium text-gray-700 focus:outline-none flex justify-between p-5 items-center ${
            isOpen
              ? "bg-[#FF932F1A] text-[#FF932F]"
              : "bg-[#C1CFE933] text-[#8893AC]"
          }`}
        >
          <span
            className={`${
              isOpen ? "text-[#FF932F]" : "text-[#8893AC]"
            } font-semibold transition-all`}
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
          <p className=" text-gray-600 bg-white ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
