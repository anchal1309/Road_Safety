import React from 'react';


interface Material {
    title: string;
    url: string;
}

interface FeedbackPageProps {
    strong_areas: string[];
    weak_areas: string[];
    recommendations: Material[];
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ strong_areas, weak_areas, recommendations }) => {
    return (
        <div className="container">
            
            <h1>Personalized Feedback</h1>

            <h2>Strong Areas</h2>
            <ul>
                {strong_areas.map((area, index) => (
                    <li key={index}>{area}</li>
                ))}
            </ul>

            <h2>Areas for Improvement</h2>
            <ul>
                {weak_areas.map((area, index) => (
                    <li key={index}>{area}</li>
                ))}
            </ul>

            <h2>Recommended Materials for Improvement</h2>
            <ul>
                {recommendations.map((material, index) => (
                    <li key={index}>
                        <a href={material.url} target="_blank" rel="noopener noreferrer">
                            {material.title}
                        </a>
                    </li>
                ))}
            </ul>

            <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>Back</a>
            
        </div>
    );
};

export default FeedbackPage;
