export default function CourseCard({
  imgSource,
  header,
  text,
  available,
  setContent,
  content,
}) {
  return (
    <div className="bg-white shadow-md p-5">
      <div className="flex justify-between">
        <img src={`${imgSource}`} alt="Source" />
        <div
          className={`text-[16px] text-center rounded-xl h-[25px] w-[80px]  ${
            available == true
              ? "text-[#06C524] bg-[#06C5241A]"
              : "text-[#DD3A16] bg-[#DD3A161A]"
          }`}
        >
          {available == true ? "Available" : "Locked"}
        </div>
      </div>
      <h2 className="text-[#191919] text-[26px] pt-8 font-semibold">
        {header}
      </h2>
      <p className="text-[#8893AC] text-[18px] pb-8 pt-2">{text}</p>
      <button
        className={`flex justify-center p-2 w-[136px] rounded-md ${
          available
            ? "border-solid border border-[#FF932F] transition-all text-[#FF932F] hover:border-[#fff] hover:text-[#fff] hover:bg-[#FF932F]"
            : "border-solid border border-[##8893AC] text-[##8893AC]"
        }`}
        disabled={!available}
        onClick={() => {
          setContent(content);
        }}
      >
        Learn More{" "}
        {!available ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 pl-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
