import Image from "next/image";

export default function LatestResultPart({ image, name, iq, mobileColored }) {
  return (
    <div
      className={`flex w-full justify-between p-5 ${
        mobileColored == true ? "bg-[#F6F9FF] md:bg-transparent rounded" : ""
      } `}
    >
      <div className="flex">
        <Image src={`/images/states/${image}.svg`} width={70} height={50} />
        <div>
          <p className="pl-4 font-bold text-[20px]">{name}</p>
          <p className="pl-4 text-left text-[#8893AC] text-[16px]">a min ago</p>
        </div>
      </div>
      <div>
        <p className="text-right  text-[#8893AC] text-[16px]">IQ</p>
        <p className=" font-bold text-[20px]">{iq}</p>
      </div>
    </div>
  );
}
