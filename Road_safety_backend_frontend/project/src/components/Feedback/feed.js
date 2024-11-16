"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FeedbackPage_1 = __importDefault(require("./FeedbackPage"));
require("./FeedbackPage.css");
const Feed = () => {
    const strong_areas = ["Emergency Response", "Traffic Laws", "Road Ethics"];
    const weak_areas = ["Traffic Signs", "Vehicle Maintenance"];
    const recommendations = [
        { title: "Traffic Signs", url: "https://www.driving-tests.org/beginner-drivers/how-to-read-traffic-signs/" },
        { title: "Vehicle Maintenance", url: "https://www.carcare.org" },
    ];
    return (<>
        
         <div className="App">
            
            <FeedbackPage_1.default strong_areas={strong_areas} weak_areas={weak_areas} recommendations={recommendations}/>
            
          </div>
        
    </>);
};
exports.default = Feed;
