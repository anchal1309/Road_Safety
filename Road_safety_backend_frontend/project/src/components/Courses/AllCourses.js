"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./style.css");
const CourseCard_1 = __importDefault(require("../CourseCard"));
const AllCourses = () => {
    return (<div>
         
         <section id="courses" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <react_router_dom_1.Link to="/courses/RoadEthics">
            <CourseCard_1.default title="Road Ethics " description="Learn essential defensive driving techniques for safer journeys." image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" duration="4 weeks" price="990"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/courses/trafficlaws">
            <CourseCard_1.default title="Traffic Laws Mastery" description="Master all traffic signs and their meanings for confident driving." image="https://m.media-amazon.com/images/I/71COEVe9buL.png" duration="2 weeks" price="490"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/courses/vehiclemaintenance">
            <CourseCard_1.default title="Vehicle Maintenance" description="Take your safety knowledge to the next level with advanced techniques." image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000" duration="6 weeks" price="149"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/courses/TrafficSigns">
            <CourseCard_1.default title="TrafficSigns" description="Take knoledge of traffic signs" image="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1007%2Fs13177-019-00178-1/MediaObjects/13177_2019_178_Fig1_HTML.png" duration="1 week" price="99"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/courses/emergencyresponse">
            <CourseCard_1.default title="emergency response" description="Emergency numbers in case of accident" image="https://www.fruitheightscity.com/ImageRepository/Document?documentID=2236" duration="1 day" price="0"/>
            </react_router_dom_1.Link>
          </div>
        </div>
      </section>
      
    </div>);
};
exports.default = AllCourses;
