import Image from "next/image";

export default function IqCard({ imgSource, name, text }) {
  return (
    <div
      style={{
        backgroundImage: `url("/images/${imgSource}.svg")`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className={`bg-[#C1CFE943] flex shadow-md rounded h-[348px] md:w-[233px] `}
    >
      <div className="bg-[#FFFFFF] mt-auto w-[209px] font-bold h-[44px] rounded mb-3 mx-auto">
        <div className="flex justify-between rounded">
          <p className="p-3 text-[#191919]">{name}</p>
          <p className="p-3 text-[#FF932F]">{text}</p>
        </div>
      </div>
    </div>
  );
}
