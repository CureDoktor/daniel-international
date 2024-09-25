"use client";
import Accordion from "../Accordion";
import CourseCardPart from "../CourseCardPart";
import VideoComponent from "../VideoComponent";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function VideoCourse({ setContent }) {
  const [source, setSource] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  );
  const [open, setOpen] = useState(false);

  const [header, setHeader] = useState("");

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
              strokeWidth="1.5"
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
                <div className="hidden md:block">
                  <CourseCardPart
                    setHeader={setHeader}
                    available={true}
                    header="Introduction to course"
                    time="01:15:24"
                  />
                  <CourseCardPart
                    setHeader={setHeader}
                    available={true}
                    header="What is IQ and how it is measured"
                    time="02:31:16"
                  />
                  <CourseCardPart
                    setHeader={setHeader}
                    available={true}
                    header="How IQ score can be increased"
                    time="01:05:10"
                  />
                </div>
                <div
                  className="block md:hidden"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <CourseCardPart
                    setHeader={setHeader}
                    available={true}
                    header="Introduction to course"
                    time="01:15:24"
                  />
                  <CourseCardPart
                    setHeader={setHeader}
                    available={true}
                    header="What is IQ and how it is measured"
                    time="02:31:16"
                  />
                  <CourseCardPart
                    setHeader={setHeader}
                    available={true}
                    header="How IQ score can be increased"
                    time="01:05:10"
                  />
                </div>
              </div>
            }
          />
          <Accordion
            title="Week 2: Increasing IQ"
            content={
              <div>
                <CourseCardPart
                  setHeader={setHeader}
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  setHeader={setHeader}
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  setHeader={setHeader}
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
                  setHeader={setHeader}
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  setHeader={setHeader}
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  setHeader={setHeader}
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
                  setHeader={setHeader}
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  setHeader={setHeader}
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  setHeader={setHeader}
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
                  setHeader={setHeader}
                  available={false}
                  header="IQ boosting triad"
                  time="01:20:12"
                />
                <CourseCardPart
                  setHeader={setHeader}
                  available={false}
                  header="Memory training"
                  time="02:12:09"
                />
                <CourseCardPart
                  setHeader={setHeader}
                  available={false}
                  header="Brain leverage exercises"
                  time="01:22:34"
                />
              </div>
            }
          />
        </div>
        <div className="pt-10 md:pt-0 md:ml-10 mb-30 hidden md:block">
          <p className="text-[#191919] text-[18px] pb-6  md:pb-10 font-semibold">
            {header}
          </p>
          <VideoComponent source={source} />
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
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-2 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-centersm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base flex justify-between font-semibold leading-6 text-gray-900"
                    >
                      <p className="text-[#191919] text-[18px] font-semibold">
                        {header}
                      </p>
                      <div onClick={() => setOpen(false)} className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </DialogTitle>
                    <div className="mt-2">
                      <div className=" md:pt-0 mb-30">
                        <VideoComponent source={source} />
                        <div className="bg-white p-6">
                          <h2 className="text-[#191919] text-[28px] font-semibold">
                            Introduction to course
                          </h2>
                          <p className="text-[#8893AC] text-[14px] py-2">
                            Begin your journey with the Introduction to IQ
                            course. This module covers the essentials of
                            cognitive skills, problem-solving, and critical
                            thinking. Build a solid foundation that will prepare
                            you for more advanced IQ challenges, helping you to
                            enhance your mental agility and analytical
                            abilities.
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
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
