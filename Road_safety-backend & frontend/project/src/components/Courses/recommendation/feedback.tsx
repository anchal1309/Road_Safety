import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import Footer from './footer';

interface Material {
    title: string;
    url: string;
}

interface FeedbackData {
    strongAreas: string[];
    weakAreas: string[];
    recommendations: Material[];
}

const FeedbackPage: React.FC = () => {
    const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);

    useEffect(() => {
        fetch('/feedback')
            .then(response => response.json())
            .then(data => setFeedbackData(data))
            .catch(error => console.error('Error fetching feedback data:', error));
    }, []);

    if (!feedbackData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container" >
            <Navbar/>
            <h1>Personalized Feedback </h1>

            < h2 > Strong Areas </h2>
            <ul>
                {
                    feedbackData.strongareas.map((area, index) => (
                        <li key={index} > {area} </li>
                    ))
                }
            </ul>

            < h2 > Areas for Improvement </h2>
            <ul>
                {
                    feedbackData.weakareas.map((area, index) => (
                        <li key={index} > {area} </li>
                    ))
                }
            </ul>

            < h2 > Recommended Materials for Improvement </h2>
            <ul>
                {
                    feedbackData.recommendations.map((material, index) => (
                        <li key={index} >
                            <a href={material.url} target="_blank" rel="noopener noreferrer" >
                                {material.title}
                            </a>
                        </li>
                    ))
                }
            </ul>

            < a href="" > Back </a>
            <Footer/>
        </div>
    );
};

export default FeedbackPage;
