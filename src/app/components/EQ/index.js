import Image from "next/image";
import { useState } from "react";
import { emotionalSelfAwareness, selfRegulation, socialAwareness, relationshipManagement, adaptability } from "@/app/questions";

const questionsBefore = emotionalSelfAwareness.concat(selfRegulation,socialAwareness,relationshipManagement,adaptability);


export default function EQ() {
   

     const questions = questionsBefore.map((question, index) => ({
        id: index + 1,
        question,
      }));
      
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    
      const handleAnswerChange = (score) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = score;
        setAnswers(updatedAnswers);
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
    
      const handleSubmit = () => {
        // Handle final score or answer submission
        console.log('User answers:', answers);
        const totalScore = answers.reduce((sum, answer) => sum + (answer || 0), 0);
        console.log('Total score:', totalScore);
      };
    
      const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="m-auto max-w-[600px] my-10 p-5 mx-auto py-40 text-black">


      <h2>{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h2>
      <p>{currentQuestion.question}</p>

      <div>
        <label>
          <input
            type="radio"
            name={`question-${currentQuestion.id}`}
            value="5"
            checked={answers[currentQuestionIndex] === 5}
            onClick={() => handleAnswerChange(5)}
          />
          Strongly Agree
        </label>

        <label>
          <input
            type="radio"
            name={`question-${currentQuestion.id}`}
            value="4"
            checked={answers[currentQuestionIndex] === 4}
            onClick={() => handleAnswerChange(4)}
          />
          Agree
        </label>

        <label>
          <input
            type="radio"
            name={`question-${currentQuestion.id}`}
            value="3"
            checked={answers[currentQuestionIndex] === 3}
            onClick={() => handleAnswerChange(3)}
          />
          Neutral
        </label>

        <label>
          <input
            type="radio"
            name={`question-${currentQuestion.id}`}
            value="2"
            checked={answers[currentQuestionIndex] === 2}
            onClick={() => handleAnswerChange(2)}
          />
          Disagree
        </label>

        <label>
          <input
            type="radio"
            name={`question-${currentQuestion.id}`}
            value="1"
            checked={answers[currentQuestionIndex] === 1}
            onClick={() => handleAnswerChange(1)}
          />
          Strongly Disagree
        </label>
      </div>

      <div>
        {currentQuestionIndex > 0 && (
          <button onClick={handleBack}>Back</button>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
    
  );
}
