export default function CourseCardPart({ header, time, available }) {
  return (
    <div className="bg-white shadow-md p-5 flex border-b-2 cursor-pointer">
      {available == true ? (
        <img
          className="max-w-[40px] h-[40px] w-[40px]"
          src="/images/play-available.png"
          alt="Orange Play"
        />
      ) : (
        <img
          width="40"
          height="40"
          alt="Grey Play"
          src="/images/play-unavailable.png"
        />
      )}
      <div className="pl-4">
        <h4 className="text-[#191919] text-[16px] font-semibold">{header}</h4>
        <p className="flex text-[14px] text-[#8893AC]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 pb-0.5 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          {time}
        </p>
      </div>
      {available != true && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-[#8893AC] ml-auto mt-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      )}
    </div>
  );
}
