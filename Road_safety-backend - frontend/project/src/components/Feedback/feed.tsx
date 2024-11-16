import React from 'react';
import FeedbackPage from './FeedbackPage';
import './FeedbackPage.css';


const Feed: React.FC = () => {
    const strong_areas: string[] = ["Emergency Response", "Traffic Laws", "Road Ethics"];
    const weak_areas: string[] = ["Traffic Signs", "Vehicle Maintenance"];
    
    const recommendations: Array<{ title: string; url: string }> = [
        { title: "Traffic Signs", url: "https://www.driving-tests.org/beginner-drivers/how-to-read-traffic-signs/" },
        { title: "Vehicle Maintenance", url: "https://www.carcare.org" },
    ];

    return (
    <>
        
         <div className="App">
            
            <FeedbackPage
                strong_areas={strong_areas}
                weak_areas={weak_areas}
                recommendations={recommendations}
            />
            
          </div>
        
    </>
    );
};

export default Feed;
