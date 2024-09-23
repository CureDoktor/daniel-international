import Image from "next/image";

export default function ImproveCard({ imgSource, header, text }) {
  return (
    <div className="bg-white shadow-md p-6 rounded mt-4 md:mt-0 md:w-1/3">
      <div className="w-[54px] h-[54px] rounded-md bg-[#EBF8FF]">
        <Image
          width={32}
          height={32}
          src={`/images/${imgSource}.svg`}
          className="d-block m-auto pt-3"
        />
      </div>
      <h3 className="text-[24px] font-bold pt-5 pb-1">{header}</h3>
      <p className="text-[#8893AC] font-[400] leading-[26px] text-[16px]">
        {text}
      </p>
    </div>
  );
}
