"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CourseCard;
const react_router_dom_1 = require("react-router-dom");
function CourseCard({ title, description, image, duration, price }) {
    return (<>
    
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{duration}</span>
          <span className="text-lg font-bold text-red-600">{price}</span>
        </div>
        
          <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"><react_router_dom_1.Link to='/courses'>Enroll Now  </react_router_dom_1.Link>
          </button>
        
      </div>
    </div>

   </>);
}
