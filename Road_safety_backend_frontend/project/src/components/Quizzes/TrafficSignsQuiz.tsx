import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Feedback/footer';

interface Question {
    question: string;
    options: string[];
    answer: string;
    image?: string;
}

const questions: Question[] = [
    {
        question: "What does this sign mean?",
        options: ["No entry", "Stop", "Yield", "Speed limit"],
        answer: "Stop",
        image: "/Road_safety-backend - frontend/project/src/assets/images/stop.png",
    },
    {
        question: "What does this sign mean?",
        options: ["Pedestrian crossing", "School zone", "No pedestrians", "Children playing"],
        answer: "Pedestrian crossing",
        image: "/Road_safety-backend - frontend/project/src/assets/images/pedestrian crosiing.jpg",
    },
    {
        question: "What does this sign indicate?",
        options: ["Slippery road", "Winding road", "Road narrows", "Sharp turn ahead"],
        answer: "Slippery road",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Slippery road.jpg",
    },
    {
        question: "What does this sign mean?",
        options: ["No parking", "Do not enter", "Wrong way", "One way"],
        answer: "Do not enter",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Do not enter.jpg",
    },
    {
        question: "What does this sign indicate?",
        options: ["Merge ahead", "Lane ends", "Two-way traffic", "Divided highway"],
        answer: "Two-way traffic",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Two-way traffic.jpg",
    },
    {
        question: "What does this sign mean?",
        options: ["Railroad crossing", "Construction ahead", "Dead end", "One-way street"],
        answer: "Railroad crossing",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Railroad crossing.jpg",
    },
    {
        question: "What does this sign indicate?",
        options: ["Roundabout ahead", "Stop ahead", "Yield ahead", "Speed bump ahead"],
        answer: "Roundabout ahead",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Roundabout ahead.jpg",
    },
    {
        question: "What does this sign mean?",
        options: ["Speed limit", "No overtaking", "Parking zone", "End of restrictions"],
        answer: "Speed limit",
        image: "/Road_safety-backend - frontend/project/src/assets/images/speedd limit.png",
    },
    {
        question: "What does this sign indicate?",
        options: ["Slippery road", "Steep hill ahead", "Road narrows", "Bumpy road"],
        answer: "Steep hill ahead",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Steep hill ahead.jpg",
    },
    {
        question: "What does this sign mean?",
        options: ["Hospital ahead", "Gas station", "No U-turn", "Dead end"],
        answer: "No U-turn",
        image: "/Road_safety-backend - frontend/project/src/assets/images/No U-turn.jpg",
    },
    {
        question: "What does this sign indicate?",
        options: ["One way", "Yield", "Stop", "Parking zone"],
        answer: "Yield",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Yield.jpg",
    },
    {
        question: "What does this sign mean?",
        options: ["Lane ends", "No entry", "Pedestrian crossing", "Divided highway begins"],
        answer: "Divided highway begins",
        image: "/Road_safety-backend - frontend/project/src/assets/images/Divided highway begins.jpg",
    },
];

const TrafficSignsQuiz: React.FC = () => {
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
                        {questions[currentQuestion].image && (
                            <div className="my-4">
                                <img
                                    src={questions[currentQuestion].image}
                                    alt="Traffic Sign"
                                    className="w-32 h-32 mx-auto"
                                />
                            </div>
                        )}
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

export default TrafficSignsQuiz;