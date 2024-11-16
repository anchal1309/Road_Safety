"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
const VehicleMaintenancePage_module_css_1 = __importDefault(require("./VehicleMaintenancePage.module.css"));
const react_router_dom_1 = require("react-router-dom");
const VehicleMaintenancePage = () => {
    const [checklist, setChecklist] = (0, react_1.useState)({
        oilChange: false,
        tirePressure: false,
        batteryCheck: false,
        fluidLevels: false,
        brakeInspection: false,
    });
    const handleChecklistToggle = (key) => {
    };
    return (<div className={VehicleMaintenancePage_module_css_1.default.container}>
      <h1 className={VehicleMaintenancePage_module_css_1.default.header}>
        <fa_1.FaCar /> Vehicle Maintenance Course
      </h1>

      {/* Introduction Section */}
      <section className={VehicleMaintenancePage_module_css_1.default.section}>
        <h2>Why Vehicle Maintenance is Important</h2>
        <p>
          Proper vehicle maintenance not only extends the life of your car but
          also ensures safety on the road. This course highlights the key tasks
          you should perform regularly to keep your vehicle in optimal
          condition.
        </p>
      </section>

      {/* Essential Maintenance Tasks */}
      <section className={VehicleMaintenancePage_module_css_1.default.section}>
        <h2>Essential Maintenance Tasks</h2>
        <ul className={VehicleMaintenancePage_module_css_1.default.list}>
          <li>
            <strong>Regular Oil Changes:</strong> Change engine oil as
            recommended to ensure smooth engine operation.
          </li>
          <li>
            <strong>Check Tire Pressure:</strong> Maintain proper tire pressure
            to improve fuel efficiency and prevent blowouts.
          </li>
          <li>
            <strong>Inspect Brake System:</strong> Ensure brakes are functioning
            properly to avoid accidents.
          </li>
          <li>
            <strong>Monitor Fluid Levels:</strong> Keep an eye on coolant, brake
            fluid, and windshield washer fluid levels.
          </li>
          <li>
            <strong>Battery Maintenance:</strong> Test the battery regularly and
            clean terminals to prevent breakdowns.
          </li>
        </ul>
        <img src="" alt="Vehicle maintenance tasks" className={VehicleMaintenancePage_module_css_1.default.image}/>
      </section>

      {/* Interactive Checklist */}
      <section className={VehicleMaintenancePage_module_css_1.default.section}>
        <h2>Interactive Maintenance Checklist</h2>
        <p>
          Use this checklist to track your regular vehicle maintenance tasks:
        </p>
        <ul className={VehicleMaintenancePage_module_css_1.default.checklist}>
          {Object.entries(checklist).map(([key, value]) => (<li key={key} className={VehicleMaintenancePage_module_css_1.default.checkItem}>
              <input type="checkbox" id={key} checked={value} onChange={() => handleChecklistToggle(key)}/>
              <label htmlFor={key}>
                <fa_1.FaCheckCircle className={VehicleMaintenancePage_module_css_1.default.icon}/>
                {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              </label>
            </li>))}
        </ul>
      </section>

      <section className={VehicleMaintenancePage_module_css_1.default.section}>
        <h2>Watch: Vehicle Maintenance Tips</h2>
        
        <p>
          <a href="https://www.youtube.com/results?search_query=vehicle+maintenance+tips" target="_blank" rel="noopener noreferrer" className={VehicleMaintenancePage_module_css_1.default.link}>
            <fa_1.FaPlayCircle /> Explore More Maintenance Videos
          </a>
        </p>
      </section>

      {/* Tips Section */}
      <section className={VehicleMaintenancePage_module_css_1.default.section}>
        <h2>Top Vehicle Maintenance Tips</h2>
        <p>Follow these tips for hassle-free vehicle maintenance:</p>
        <ul className={VehicleMaintenancePage_module_css_1.default.list}>
          <li>Keep a maintenance log to track tasks and schedules.</li>
          <li>Invest in quality tools for minor repairs and adjustments.</li>
          <li>
            Schedule seasonal checkups to prepare your vehicle for weather
            changes.
          </li>
          <li>
            Use manufacturer-recommended parts and fluids for replacements.
          </li>
          <li>
            Always refer to your vehicle’s manual for specific instructions.
          </li>
        </ul>
      </section>

      {/* Resources Section */}
      <section className={VehicleMaintenancePage_module_css_1.default.section}>
        <h2>Additional Resources</h2>
        <ul className={VehicleMaintenancePage_module_css_1.default.list}>
          <li>
            <a href="https://www.carcare.org" target="_blank" rel="noopener noreferrer" className={VehicleMaintenancePage_module_css_1.default.link}>
              Car Care Council - Comprehensive Maintenance Guides
            </a>
          </li>
          <li>
            <a href="https://www.consumerreports.org/cars/how-to-maintain-your-car/" target="_blank" rel="noopener noreferrer" className={VehicleMaintenancePage_module_css_1.default.link}>
              Consumer Reports - How to Maintain Your Car
            </a>
          </li>
          <li>
            <a href="https://www.aaa.com/autorepair" target="_blank" rel="noopener noreferrer" className={VehicleMaintenancePage_module_css_1.default.link}>
              AAA Auto Repair and Maintenance Resources
            </a>
          </li>
        </ul>
      </section>
      <react_router_dom_1.Link to="/courses/vehiclemaintenancequiz">
      <button className={VehicleMaintenancePage_module_css_1.default.quizButton}>
        <fa_1.FaWrench /> Take Quiz
      </button>
      </react_router_dom_1.Link>
    </div>);
};
exports.default = VehicleMaintenancePage;
