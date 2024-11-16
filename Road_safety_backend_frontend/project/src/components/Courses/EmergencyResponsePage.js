"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function () { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
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
const TrafficLawsPage_module_css_1 = __importDefault(require("./TrafficLawsPage.module.css"));
const EmergencyResponsePage = () => {
  const [checklist, setChecklist] = (0, react_1.useState)({
    stayCalm: false,
    ensureSafety: false,
    callHelp: false,
    provideAid: false,
    documentIncident: false,
  });
  const handleChecklistToggle = (key) => {
  return (
    <div className={TrafficLawsPage_module_css_1.default.container}>
      <h1 className={TrafficLawsPage_module_css_1.default.header}>
        <fa_1.FaAmbulance /> Emergency Response Course
      </h1>

      {/* Introduction Section */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>Why Emergency Response Matters</h2>
        <p>
          Road emergencies can escalate quickly. Knowing how to respond can save
          lives, reduce injuries, and prevent chaos. This course prepares you to
          act responsibly during emergencies, ensuring safety for yourself and
          others.
        </p>
      </section>

      {/* Key Steps Section */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>5 Key Steps in Road Emergency Response</h2>
        <ul className={TrafficLawsPage_module_css_1.default.list}>
          <li>
            <strong>Stay Calm:</strong> Avoid panic and assess the situation
            objectively.
          </li>
          <li>
            <strong>Ensure Safety:</strong> Turn on hazard lights, set up
            warning triangles, and move to a secure location.
          </li>
          <li>
            <strong>Call Emergency Services:</strong> Dial emergency numbers,
            provide location details, and describe the situation clearly.
          </li>
          <li>
            <strong>Provide Basic First Aid:</strong> Help injured persons if
            you’re trained in first aid.
          </li>
          <li>
            <strong>Document the Incident:</strong> Take pictures and collect
            information for authorities.
          </li>
        </ul>

      </section>

      {/* Interactive Checklist */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>Interactive Checklist</h2>
        <p>
          Test your understanding of the steps by checking off completed tasks
          during an emergency simulation:
        </p>
        <ul className={TrafficLawsPage_module_css_1.default.checklist}>
          {Object.entries(checklist).map(([key, value]) => (<li key={key} className={TrafficLawsPage_module_css_1.default.checkItem}>
            <input type="checkbox" id={key} checked={value} onChange={() => handleChecklistToggle(key)} />
            <label htmlFor={key}>
              <fa_1.FaCheckSquare className={TrafficLawsPage_module_css_1.default.icon} />
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
          </li>))}
        </ul>
      </section>

      {/* Tips Section */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>Tips for Simulating Emergency Situations</h2>
        <p>
          Practice emergency responses regularly to stay prepared. Here’s how:
        </p>
        <ul className={TrafficLawsPage_module_css_1.default.list}>
          <li>Role-play different scenarios with family or friends.</li>
          <li>
            Learn CPR and basic first aid skills from certified organizations.
          </li>
          <li>
            Keep emergency kits in your car, including a first-aid box,
            flashlight, and essential tools.
          </li>
          <li>
            Regularly check the condition of your vehicle’s safety equipment.
          </li>
        </ul>
      </section>

      {/* Video Section */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>Watch: Emergency Response Tips</h2>

        <p>
          <a href="https://www.youtube.com/results?search_query=road+emergency+response" target="_blank" rel="noopener noreferrer" className={TrafficLawsPage_module_css_1.default.link}>
            <fa_1.FaPlayCircle /> More Videos on Emergency Response
          </a>
        </p>
      </section>

      {/* Important Contacts */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>Emergency Contacts</h2>
        <ul className={TrafficLawsPage_module_css_1.default.contactList}>
          <li>
            <fa_1.FaPhoneAlt /> Ambulance:{" "}
            <a href="tel:108" className={TrafficLawsPage_module_css_1.default.link}>
              108
            </a>
          </li>
          <li>
            <fa_1.FaPhoneAlt /> Police:{" "}
            <a href="tel:100" className={TrafficLawsPage_module_css_1.default.link}>
              100
            </a>
          </li>
          <li>
            <fa_1.FaPhoneAlt /> Roadside Assistance:{" "}
            <a href="tel:18004251515" className={TrafficLawsPage_module_css_1.default.link}>
              1800 425 1515
            </a>
          </li>
        </ul>
      </section>

      {/* Resources Section */}
      <section className={TrafficLawsPage_module_css_1.default.section}>
        <h2>Additional Resources</h2>
        <ul className={TrafficLawsPage_module_css_1.default.list}>
          <li>
            <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html" target="_blank" rel="noopener noreferrer" className={TrafficLawsPage_module_css_1.default.link}>
              Red Cross - Emergency Preparedness
            </a>
          </li>
          <li>
            <a href="https://nhtsa.gov/road-safety/roadside-emergency" target="_blank" rel="noopener noreferrer" className={TrafficLawsPage_module_css_1.default.link}>
              NHTSA - Roadside Safety
            </a>
          </li>
          <li>
            <a href="https://www.ready.gov/road-safety" target="_blank" rel="noopener noreferrer" className={TrafficLawsPage_module_css_1.default.link}>
              Ready.gov - Road Safety Tips
            </a>
          </li>
        </ul>
      </section>

      {/* Quiz Button */}
      <button className={TrafficLawsPage_module_css_1.default.quizButton}>
        <fa_1.FaExclamationTriangle /> Take Quiz
      </button>
    </div>
  );
}
};
exports.default = EmergencyResponsePage;
