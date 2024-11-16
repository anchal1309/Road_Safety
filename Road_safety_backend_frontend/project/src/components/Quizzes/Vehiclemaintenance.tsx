import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Feedback/footer';
interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "What is the purpose of engine oil?",
        options: ["Lubricate engine parts", "Clean the engine", "Cool the engine", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "How often should you check your tire pressure?",
        options: ["Once a week", "Once a month", "Every six months", "Only when the tire looks flat"],
        answer: "Once a month",
    },
    {
        question: "What is the recommended interval for an oil change?",
        options: ["Every 1,000 miles", "Every 3,000 to 5,000 miles", "Once a year", "Only when the oil light is on"],
        answer: "Every 3,000 to 5,000 miles",
    },
    {
        question: "What is the function of coolant in a vehicle?",
        options: ["To keep the engine warm", "To clean the radiator", "To prevent overheating", "To increase fuel efficiency"],
        answer: "To prevent overheating",
    },
    {
        question: "Which of these is a sign that your brakes may need servicing?",
        options: ["Squeaking or grinding noise", "Car pulls to one side", "Soft or spongy brake pedal", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "How often should the air filter be replaced?",
        options: ["Every 5,000 miles", "Every 15,000 to 30,000 miles", "Once a year", "Never"],
        answer: "Every 15,000 to 30,000 miles",
    },
    {
        question: "What should you do if your check engine light comes on?",
        options: ["Ignore it", "Stop driving immediately", "Check for loose gas cap or other minor issues", "Schedule a repair check-up"],
        answer: "Check for loose gas cap or other minor issues",
    },
    {
        question: "What is the main function of transmission fluid?",
        options: ["Lubricate gears", "Improve fuel economy", "Cool the transmission system", "Both A and C"],
        answer: "Both A and C",
    },
    {
        question: "What does the tread depth of a tire indicate?",
        options: ["The size of the tire", "The age of the tire", "The traction and grip of the tire", "The pressure of the tire"],
        answer: "The traction and grip of the tire",
    },
    {
        question: "How often should wiper blades be replaced?",
        options: ["Every month", "Every 6 to 12 months", "Every two years", "Only when they stop working"],
        answer: "Every 6 to 12 months",
    },
    {
        question: "What should you check before a long road trip?",
        options: ["Tire pressure", "Oil level", "Coolant and brake fluid", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "What does it mean if your vehicle pulls to one side while driving?",
        options: ["Tire misalignment", "Low oil", "Dead battery", "None of the above"],
        answer: "Tire misalignment",
    },
];

const Vehiclemaintenance: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption: string) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
            <Navbar/>
                {showScore ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            You scored {score} out of {questions.length}
                        </h2>
                        <button
                            onClick={resetQuiz}
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Restart Quiz
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Question {currentQuestion + 1}/{questions.length}
                        </h2>
                        <p className="mt-4 text-gray-600">{questions[currentQuestion].question}</p>
                        <div className="mt-6 space-y-4">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(option)}
                                    className="w-full px-4 py-2 text-left bg-blue-100 rounded hover:bg-blue-200"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            <Footer/>
            </div>
        </div>
    );
};

export default Vehiclemaintenance;
