import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  emotionalSelfAwareness,
  selfRegulation,
  socialAwareness,
  relationshipManagement,
  adaptability,
} from "@/app/questions";
import { useRouter } from "next/navigation";

const questionsBefore = emotionalSelfAwareness.concat(
  selfRegulation,
  socialAwareness,
  relationshipManagement,
  adaptability
);

export default function EQ() {
  const questions = questionsBefore.map((question, index) => ({
    id: index + 1,
    question,
  }));

  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [progress, setProgress] = useState(0);

  const handleAnswerChange = (score) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = score;
    setAnswers(updatedAnswers);
    handleNext();
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const sumAnswers = (array) => {
    return array.reduce((sum, answer) => sum + (answer || 0), 0);
  };

  const handleSubmit = () => {
    const emotional = sumAnswers(answers.slice(0, 12));
    const self = sumAnswers(answers.slice(12, 24));
    const social = sumAnswers(answers.slice(24, 36));
    const relationship = sumAnswers(answers.slice(36, 48));
    const adaptable = sumAnswers(answers.slice(48, 60));
    const totalScore = sumAnswers(answers);

    localStorage.setItem(
      "finalScoreEQ",
      JSON.stringify({
        emotional,
        self,
        social,
        relationship,
        adaptable,
        totalScore,
      })
    );
    router.push("/eq-results");
  };

  useEffect(() => {
    setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div className="m-auto max-w-full md:max-w-[1200px] my-10 p-5 mx-auto py-10 text-black">
        <div className="h-[20px] w-full bg-orange-100 rounded-full">
          <div
            className={`h-[20px] bg-lime-500 rounded-full`}
            style={{ width: `${progress}%`, transition: "width 1s" }}
          ></div>
        </div>
        <div className="py-10 md:pt-24 md:pb-36 text-center">
          {/* <h2>{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h2> */}
          <p className="text-[26px] font-bold mb-10">
            {currentQuestion.question}
          </p>
          <div>
            <label className="cursor-pointer border p-5 bg-orange-100 rounded-md block md:inline m-3 active:bg-lime-500 pr-7">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="5"
                className="invisible"
                onClick={() => handleAnswerChange(5)}
              />
              Strongly Agree
            </label>
            <label className="cursor-pointer border p-5 bg-orange-100 rounded-md block md:inline m-3 active:bg-lime-500 pr-7">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="4"
                className="invisible"
                onClick={() => handleAnswerChange(4)}
              />
              Agree
            </label>
            <label className="cursor-pointer border p-5 bg-orange-100 rounded-md block md:inline m-3 active:bg-lime-500 pr-7">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="3"
                className="invisible"
                onClick={() => handleAnswerChange(3)}
              />
              Neutral
            </label>
            <label className="cursor-pointer border p-5 bg-orange-100 rounded-md block md:inline m-3 active:bg-lime-500  pr-7">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="2"
                className="invisible"
                onClick={() => handleAnswerChange(2)}
              />
              Disagree
            </label>
            <label className="cursor-pointer border p-5 bg-orange-100 rounded-md block md:inline m-3 active:bg-lime-500 pr-7">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value="1"
                className="invisible"
                onClick={() => handleAnswerChange(1)}
              />
              Strongly Disagree
            </label>
          </div>
          <div>
            {currentQuestionIndex > 0 && (
              <div className="text-left">
                <button className="font-bold mt-20" onClick={handleBack}>
                  {"<"} Back
                </button>
              </div>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
              <div></div>
            ) : (
              <button
                className="cursor-pointer block mx-auto w-full md:w-[150px] border p-5 px-10 bg-orange-300 font-bold rounded-md block md:inline m-3 active:bg-lime-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
