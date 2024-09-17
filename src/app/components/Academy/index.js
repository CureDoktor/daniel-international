"use client";
import CourseCard from "../CourseCard";
import VideoCourse from "../VideoCourse";
import { useState } from "react";

export default function Academy() {
  const [content, setContent] = useState(1);

  var number = 10036;
  var max = 20000;
  var percent = Math.round(number / max);

  const AcademyOptions = [
    {
      imgPath: "/images/videoCourse.png",
      header: "Video course",
      text: "Sharpen IQ with quick, interactive lessons on critical thinking and problem-solving",
      available: true,
      content: 2,
    },
    {
      imgPath: "/images/book.png",
      header: "IQ training",
      text: "Sharpen IQ with quick, interactive lessons on critical thinking and problem-solving",
      available: true,
      content: 3,
    },
    {
      imgPath: "/images/EqTest.png",
      header: "EQ test",
      text: "Sharpen IQ with quick, interactive lessons on critical thinking and problem-solving",
      available: true,
      content: 4,
    },
    {
      imgPath: "/images/advancedIQ.png",
      header: "Advanced IQ test ",
      text: "Sharpen IQ with quick, interactive lessons on critical thinking and problem-solving",
      available: false,
      content: 5,
    },
    {
      imgPath: "/images/SuperAdvancedIQ.png",
      header: "Super Advanced IQ test",
      text: "Sharpen IQ with quick, interactive lessons on critical thinking and problem-solving",
      available: false,
      content: 6,
    },
  ];
  return (
    <main>
      {content != 1 && (
        <div>
          <VideoCourse setContent={setContent} />
        </div>
      )}
      {content == 1 && (
        <div>
          <div className="md:flex justify-between pb-6 pt-10">
            <h1 className="text-[#191919] text-[52px] font-bold">Academy</h1>
            <div className="flex md:w-[440px] pt-5 justify-between">
              <div>
                <div className="flex justify-between w-[250px] md:w-[355px] p-2">
                  <p className="text-[#8893AC] weight-[600]">
                    {number} / {max}
                  </p>
                  <p className="text-[##191919] text-[18px] font-semibold">
                    30 level
                  </p>
                </div>
                <div className="w-100 h-1 bg-orange-100">
                  <div className="h-1 bg-orange-300 w-[50%]"></div>
                </div>
              </div>
              <img src="/images/star.png" alt="Star" />
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            {AcademyOptions.map((element) => {
              return (
                <CourseCard
                  key={element.imgPath}
                  imgSource={element.imgPath}
                  header={element.header}
                  text={element.text}
                  available={element.available}
                  setContent={setContent}
                  content={element.content}
                />
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
