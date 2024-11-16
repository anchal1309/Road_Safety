"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Body_1 = __importDefault(require("./components/Body"));
const react_router_dom_1 = require("react-router-dom");
const LoginPage_1 = __importDefault(require("./components/LoginPage"));
const TrafficLawsPage_1 = __importDefault(require("./components/Courses/TrafficLawsPage"));
const RoadEthicsPage_1 = __importDefault(require("./components/Courses/RoadEthicsPage"));
const VehicleMaintenancePage_1 = __importDefault(require("./components/Courses/VehicleMaintenancePage"));
const Quizzes_1 = __importDefault(require("./components/Quizzes/Quizzes"));
const RegistrationPage_1 = __importDefault(require("./components/Registration/RegistrationPage"));
const feed_1 = __importDefault(require("./components/Feedback/feed"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const footer_1 = __importDefault(require("./components/Feedback/footer"));
const AllCourses_1 = __importDefault(require("./components/Courses/AllCourses"));
const Traffic_Sign_Course_1 = __importDefault(require("./components/Courses/Traffic_Sign_Course"));
const EmergencyResponsePage_1 = __importDefault(require("./components/Courses/EmergencyResponsePage"));
const Vehiclemaintenance_1 = __importDefault(require("./components/Quizzes/Vehiclemaintenance"));
const TrafficSignsQuiz_1 = __importDefault(require("./components/Quizzes/TrafficSignsQuiz"));
function App() {
    const router = (0, react_router_dom_1.createBrowserRouter)([
        {
            path: "/",
            element: <Body_1.default />
        },
        {
            path: "/SignIn",
            element: <><LoginPage_1.default /></>
        },
        {
            path: "/SignUp",
            element: <><RegistrationPage_1.default /></>
        },
        {
            path: "/courses/RoadEthics",
            element: <><RoadEthicsPage_1.default /></>
        },
        {
            path: "/courses/trafficlaws",
            element: <><TrafficLawsPage_1.default /></>
        },
        {
            path: "/courses/vehiclemaintenance",
            element: <><VehicleMaintenancePage_1.default /></>
        },
        {
            path: "courses/TrafficSigns",
            element: <><Traffic_Sign_Course_1.default /></>
        },
        {
            path: "courses/emergencyresponse",
            element: <><EmergencyResponsePage_1.default /></>
        },
        {
            path: "/courses/vehiclemaintenancequiz",
            element: <><Navbar_1.default /><Vehiclemaintenance_1.default /></>
        },
        {
            path: "/quizzes",
            element: <><Navbar_1.default /><Quizzes_1.default /></>
        },
        {
            path: "courses/TrafficSignsQuiz",
            element: <><Navbar_1.default /><TrafficSignsQuiz_1.default /></>
        },
        {
            path: "/feed",
            element: <><Navbar_1.default /><feed_1.default /><footer_1.default /></>
        },
        {
            path: "/AllCourses",
            element: <><Navbar_1.default /><AllCourses_1.default /><footer_1.default /></>
        },
        {
            path: "./registration",
            element: <><RegistrationPage_1.default /></>
        }
    ]);
    return (<>





      <react_router_dom_1.RouterProvider router={router}/>




    </>);
}
exports.default = App;
