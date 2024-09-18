import Accordion from "../Accordion";
import CourseCardPart from "../CourseCardPart";

export default function VideoCourse({ setContent }) {
  return (
    <div>
      <div className="md:flex justify-between pt-10">
        <div className="md:w-[70%]">
          <p
            onClick={() => {
              setContent(1);
            }}
            className="text-[#191919] text-[18px] pb-10 flex font-semibold md:ml-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 pr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="pt-0.5">Back to academy</span>
          </p>
          <Accordion
            title="Week 1: Get started"
            content={
              <div>
                <CourseCardPart
                  available={true}
                  header="Introduction to course"
                  time="01:15:24"
                />
                <CourseCardPart
                  available={true}
                  header="What is IQ and how it is measured"
                  time="02:31:16"
                />
                <CourseCardPart
                  available={true}
                  header="How IQ score can be increased"
                  time="01:05:10"
                />
              </div>
            }
          />
          <Accordion
            title="Week 2: Increasing IQ"
            content={
              <div>
                <CourseCardPart
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  available={false}
                  header="Brain leverage exercises"
                  time="01:22:34"
                />
              </div>
            }
          />
          <Accordion
            title="Week 3: The high IQ societies"
            content={
              <div>
                <CourseCardPart
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  available={false}
                  header="Brain leverage exercises"
                  time="01:22:34"
                />
              </div>
            }
          />
          <Accordion
            title="Week 4: Brain-booster drugs"
            content={
              <div>
                <CourseCardPart
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  available={false}
                  header="Brain leverage exercises"
                  time="01:22:34"
                />
              </div>
            }
          />
          <Accordion
            title="Week 5: Conclusions"
            content={
              <div>
                <CourseCardPart
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  available={false}
                  header="Brain leverage exercises"
                  time="01:22:34"
                />
              </div>
            }
          />
        </div>
        <div className="pt-10 md:pt-0 md:ml-10 mb-30">
          <p className="text-[#191919] text-[18px] pb-6  md:pb-10 font-semibold">
            Week 1: Get started / Introduction to course
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/__mSgDEOyv8?si=VejZkXhn2lOChEUk"
            title="YouTube video player"
            frameborder="0"
            className="h-auto w-[100%] md:h-[500px] md:w-[100%]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="bg-white p-6">
            <h2 className="text-[#191919] text-[28px] font-semibold">
              Introduction to course
            </h2>
            <p className="text-[#8893AC] text-[14px] py-2">
              Begin your journey with the Introduction to IQ course. This module
              covers the essentials of cognitive skills, problem-solving, and
              critical thinking. Build a solid foundation that will prepare you
              for more advanced IQ challenges, helping you to enhance your
              mental agility and analytical abilities.
            </p>
            <h4 className="text-[#191919] text-[16px] font-semibold">
              Key topics covered:
            </h4>
            <ul className="list-disc pl-6 pt-2 text-[#8893AC]">
              <li>Understanding IQ and Its Importance;</li>
              <li>Basic problem-solving techniques;</li>
              <li>Foundations of critical thinking;</li>
              <li>Cognitive skills development.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 h-10 w-[100%]"></div>
    </div>
  );
}
