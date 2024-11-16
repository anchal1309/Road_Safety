import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';



export const ViewMoreButton: React.FC = () => {
  return (
    <Link
      to="/AllCourses"
      className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <Link to="/AllCourses"><span className="font-semibold">View More Courses</span></Link>
      <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};