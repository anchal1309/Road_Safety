"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FeedbackPage = ({ strong_areas, weak_areas, recommendations }) => {
    return (<div className="container">
            
            <h1>Personalized Feedback</h1>

            <h2>Strong Areas</h2>
            <ul>
                {strong_areas.map((area, index) => (<li key={index}>{area}</li>))}
            </ul>

            <h2>Areas for Improvement</h2>
            <ul>
                {weak_areas.map((area, index) => (<li key={index}>{area}</li>))}
            </ul>

            <h2>Recommended Materials for Improvement</h2>
            <ul>
                {recommendations.map((material, index) => (<li key={index}>
                        <a href={material.url} target="_blank" rel="noopener noreferrer">
                            {material.title}
                        </a>
                    </li>))}
            </ul>

            <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>Back</a>
            
        </div>);
};
exports.default = FeedbackPage;
