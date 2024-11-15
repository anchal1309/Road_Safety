import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';
import FeedbackPage from './components/Courses/recommendation/feedback';
import Prediction from "./components/Courses/recommendation/feedback";
import Recommendation from "./components/Courses/recommendation/recommend";


import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">RoadSafe</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-red-600 transition">Courses</a>
            <a href="./Courses/recommendation/prediction.tsx" className="text-gray-600 hover:text-red-600 transition">Prediction</a>
            <a href="./Courses/recommendation/feedback.tsx" className="text-gray-600 hover:text-red-600 transition">Feedback</a>
            <a href="./Courses/recommendation/recommend.tsx" className="text-gray-600 hover:text-red-600 transition">Recommendation</a>
            <NavLink to="/SignIn" className="text-gray-600 hover:text-red-600 transition">SignIn</NavLink>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#courses" className="block px-3 py-2 text-gray-600 hover:text-red-600">Courses</a>
            <a href="#signs" className="block px-3 py-2 text-gray-600 hover:text-red-600">Traffic Signs</a>
            <a href="#signals" className="block px-3 py-2 text-gray-600 hover:text-red-600">Signals</a>
            <a href="#tips" className="block px-3 py-2 text-gray-600 hover:text-red-600">Safety Tips</a>
            <button className="w-full text-left px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}