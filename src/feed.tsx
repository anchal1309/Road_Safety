import React from 'react';
import FeedbackPage from './feedback';
import './App.css';

const Feed: React.FC = () => {
    const strong_areas: string[] = ["JavaScript", "React", "TypeScript"];
    const weak_areas: string[] = ["Testing", "API Integration"];
    
    const recommendations: Array<{ title: string; url: string }> = [
        { title: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { title: "JavaScript Info", url: "https://javascript.info/" },
    ];

    return (
        <div className="App">
            <FeedbackPage
                strong_areas={strong_areas}
                weak_areas={weak_areas}
                recommendations={recommendations}
            />
        </div>
    );
}

export default Feed;
