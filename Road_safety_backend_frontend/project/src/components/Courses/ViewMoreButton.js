"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewMoreButton = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const ViewMoreButton = () => {
    return (<react_router_dom_1.Link to="/AllCourses" className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      <react_router_dom_1.Link to="/AllCourses"><span className="font-semibold">View More Courses</span></react_router_dom_1.Link>
      <lucide_react_1.ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"/>
    </react_router_dom_1.Link>);
};
exports.ViewMoreButton = ViewMoreButton;
