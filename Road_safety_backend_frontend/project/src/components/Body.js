"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Body;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const CourseCard_1 = __importDefault(require("./CourseCard"));
const SignalCard_1 = __importDefault(require("./SignalCard"));
const Navbar_1 = __importDefault(require("./Navbar"));
const NoParking_png_1 = __importDefault(require("../assets/images/NoParking.png"));
const U_Turn_png_1 = __importDefault(require("../assets/images/U-Turn.png"));
const speedd_limit_png_1 = __importDefault(require("../assets/images/speedd limit.png"));
const quizzes_png_1 = __importDefault(require("../assets/images/quizzes.png"));
const stop_png_1 = __importDefault(require("../assets/images/stop.png"));
const react_router_dom_1 = require("react-router-dom");
const QuizCard_1 = __importDefault(require("./QuizCard"));
const ViewMoreButton_1 = require("./Courses/ViewMoreButton");
function Body() {
    return (<>
     <div className="min-h-screen bg-gray-50">
     <Navbar_1.default />

     <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row items-cente">
          <div className="md:w-1/2 text-white flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Learn Road Safety the Right Way</h1>
            <p className="text-2xl mb-8">Master traffic rules, signs, and safe driving <br />practices with our comprehensive courses.</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center">
              Get Started <lucide_react_1.ArrowRight className="ml-2"/>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 ">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000" alt="Safe Driving" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <lucide_react_1.BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
              <p className="text-gray-600">Learn from certified instructors with years of experience</p>
            </div>
            <div className="text-center">
              <lucide_react_1.Shield className="w-12 h-12 text-red-600 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Safety</h3>
              <p className="text-gray-600">Complete coverage of road safety principles and practices</p>
            </div>
            <div className="text-center">
              <lucide_react_1.Users className="w-12 h-12 text-red-600 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join a community of safe drivers and learn together</p>
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <react_router_dom_1.Link to="/courses/RoadEthics">
            <CourseCard_1.default title="Road Ethics " description="Learn essential defensive driving techniques for safer journeys." image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" duration="4 weeks" price="990"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/courses/trafficlaws">
            <CourseCard_1.default title="Traffic Laws Mastery" description="Master all traffic Laws and their meanings for confident driving." image="https://media.springernature.com/lw1200/springer-static/image/art%3A10.1007%2Fs13177-019-00178-1/MediaObjects/13177_2019_178_Fig1_HTML.png" duration="2 weeks" price="490"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/courses/vehiclemaintenance">
            <CourseCard_1.default title="Vehicle Maintenance" description="Take your safety knowledge to the next level with advanced techniques." image="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000" duration="6 weeks" price="149"/>
            </react_router_dom_1.Link>
            <section className="py-1 px-4"></section><div className='px-4 flex flex-col items-center justify-center'><ViewMoreButton_1.ViewMoreButton /></div>
            
          </div>
        </div>
      </section>
      <section id="quizzes" className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quizzes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <react_router_dom_1.Link to="/quizzes">
            <QuizCard_1.default title=" Quizzes for Road Ethics " description="Learn essential defensive driving techniques for safer journeys." image={quizzes_png_1.default} duration="12 questions"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/quizzes">
            <QuizCard_1.default title=" Quizzes for Traffic Signs " description="Master all traffic signs and their meanings for confident driving." image={quizzes_png_1.default} duration="12 questions"/>
            </react_router_dom_1.Link>
            <react_router_dom_1.Link to="/quizzes">
            <QuizCard_1.default title="Quizzes For Vehicle Maintenance" description="Take your safety knowledge to the next level with advanced techniques." image={quizzes_png_1.default} duration="12 questions"/>
            </react_router_dom_1.Link>
          </div>
        </div>
      </section>

      {/* Traffic Signs */}
      <section id="signs" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Traffic Signs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <SignalCard_1.default icon={stop_png_1.default} title="Stop Sign" description="Complete stop required "/>
            <SignalCard_1.default icon={U_Turn_png_1.default} title="U-Turn" description="To Change Your Direction"/>
            <SignalCard_1.default icon={NoParking_png_1.default} title="No Parking" description="Parking not allowed in this area"/>
            <SignalCard_1.default icon={speedd_limit_png_1.default} title="Speed Limit" description="Maximum speed allowed on this road"/>
          </div>
        </div>
      </section>

      <footer className="bg-red-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RoadSafe</h3>
            <p className="text-gray-200">Making roads safer, one driver at a time.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className=" space-y-2">
              <li><a href="#courses" className=" text-red-800  hover:text-blue">Courses</a></li>
              <li><a href="#signs" className="text-red-800 hover:text-blue">Traffic Signs</a></li>
              <li><a href="#signals" className="text-red-800 hover:text-white">Signals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 ">
              <li><a href="" className="  over:text-white text-red-800 ">Blog</a></li>
              <li><a href="" className="text-red-800  hover:text-white">Safety Tips</a></li>
              <li><a href="" className="text-red-800  hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-200">Email: info@roadsafe.com</p>
            <p className="text-gray-200">Phone: +91 87001-xxxxx </p>
          </div>
        </div>
      </footer>
      </div>
    </>);
}
