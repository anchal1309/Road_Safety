import React, { useState } from "react";
import "./Quizzes.css";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  { question: "What does a red traffic light mean?", options: ["Stop", "Go", "Slow Down", "U-Turn Allowed"], correctAnswer: "Stop" },
  { question: "What should you do at a zebra crossing?", options: ["Speed up", "Stop for pedestrians", "Ignore it", "Honk"], correctAnswer: "Stop for pedestrians" },
  { question: "What is the maximum speed in a school zone?", options: ["30 km/h", "50 km/h", "60 km/h", "70 km/h"], correctAnswer: "30 km/h" },
  { question: "What should you do if an ambulance is behind you?", options: ["Pull over", "Speed up", "Stop immediately", "Ignore it"], correctAnswer: "Pull over" },
  { question: "What does a yellow traffic light indicate?", options: ["Speed up", "Prepare to stop", "Stop", "Go"], correctAnswer: "Prepare to stop" },
  { question: "What is the penalty for not wearing a seatbelt?", options: ["Warning", "Fine", "License suspension", "No penalty"], correctAnswer: "Fine" },
  { question: "When can you overtake another vehicle?", options: ["On a curve", "In a no-passing zone", "When it's safe", "In heavy traffic"], correctAnswer: "When it's safe" },
  { question: "What does a flashing red traffic light mean?", options: ["Yield", "Stop", "Go", "No entry"], correctAnswer: "Stop" },
  { question: "What should you do before changing lanes?", options: ["Honk", "Check mirrors and blind spots", "Speed up", "Stop"], correctAnswer: "Check mirrors and blind spots" },
  { question: "What is the meaning of a double yellow line?", options: ["No passing", "Passing allowed", "Parking allowed", "Speed limit"], correctAnswer: "No passing" },
  { question: "Who has the right of way at a roundabout?", options: ["Vehicles in the roundabout", "Entering vehicles", "Pedestrians", "Cyclists"], correctAnswer: "Vehicles in the roundabout" },
  { question: "When should you use high-beam headlights?", options: ["In fog", "On empty roads", "In heavy traffic", "During rain"], correctAnswer: "On empty roads" },
];

const Quizzes: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsCompleted(false);
    setSelectedOption("");
  };

  return (
    <div className="quiz-container">
      <h1>Road Safety Quiz</h1>
      {isCompleted ? (
        <div className="result-container">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={handleRestart} className="btn">Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <p>{currentQuestion.question}</p>
          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <div key={option} className="option">
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="btn" disabled={!selectedOption}>
            {currentQuestionIndex + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
