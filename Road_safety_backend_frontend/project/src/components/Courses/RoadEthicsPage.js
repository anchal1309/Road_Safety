"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const RoadEthicsPage_module_css_1 = __importDefault(require("./RoadEthicsPage.module.css"));
const react_router_dom_1 = require("react-router-dom");
const RoadEthicsPage = () => {
  return (<div className={RoadEthicsPage_module_css_1.default.container}>
    <h1 className={RoadEthicsPage_module_css_1.default.header}>
      <fa_1.FaHandshake /> Road Ethics Course
    </h1>

    {/* Introduction Section */}
    <section className={RoadEthicsPage_module_css_1.default.section}>
      <h2>What Are Road Ethics?</h2>
      <p>
        Road ethics refer to the moral principles and considerate behavior
        that every road user should follow. They include respecting traffic
        rules, showing courtesy to others, and fostering a culture of safety
        and responsibility.
      </p>
      <p>
        Practicing good road ethics reduces accidents, enhances cooperation
        among drivers, pedestrians, and cyclists, and creates a safer and more
        pleasant environment for all.
      </p>
    </section>

    {/* Key Principles Section */}
    <section className={RoadEthicsPage_module_css_1.default.section}>
      <h2>Key Principles of Road Ethics</h2>
      <ul className={RoadEthicsPage_module_css_1.default.list}>
        <li>
          <strong>Patience and Tolerance:</strong> Avoid aggressive driving
          behaviors such as honking excessively or tailgating.
        </li>
        <li>
          <strong>Respect for Vulnerable Users:</strong> Give priority to
          pedestrians, cyclists, and emergency vehicles.
        </li>
        <li>
          <strong>Avoid Distractions:</strong> Refrain from using mobile
          phones or engaging in other activities while driving.
        </li>
        <li>
          <strong>Environmental Consideration:</strong> Minimize unnecessary
          idling, and consider eco-friendly driving habits.
        </li>
      </ul>
      <img src="" alt="Promoting ethics on the road" className={RoadEthicsPage_module_css_1.default.image} />
      <p>
        <a href="https://www.sustainabletransport.org/topics/road-safety/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
          <fa_1.FaLink /> Learn more about sustainable transport and ethics
        </a>
      </p>
    </section>

    {/* Benefits Section */}
    <section className={RoadEthicsPage_module_css_1.default.section}>
      <h2>Benefits of Ethical Road Behavior</h2>
      <p>
        Ethical road behavior positively impacts society in numerous ways:
      </p>
      <ul className={RoadEthicsPage_module_css_1.default.list}>
        <li>Reduces stress and road rage among drivers.</li>
        <li>Enhances safety and reduces the number of accidents.</li>
        <li>Improves traffic flow and reduces congestion.</li>
        <li>Builds a culture of trust and mutual respect.</li>
      </ul>
      <p>
        <a href="https://www.who.int/roadsafety/en/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
          <fa_1.FaInfoCircle /> WHO Road Safety and Ethical Guidelines
        </a>
      </p>
    </section>

    {/* Video Section */}
    <section className={RoadEthicsPage_module_css_1.default.section}>
      <h2>Watch: Road Ethics in Action</h2>

      <p>
        <a href="https://www.youtube.com/results?search_query=road+ethics+videos" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
          <fa_1.FaPlayCircle /> More Educational Videos on Road Ethics
        </a>
      </p>
    </section>

    {/* Resources Section */}
    <section className={RoadEthicsPage_module_css_1.default.section}>
      <h2>Additional Resources</h2>
      <ul className={RoadEthicsPage_module_css_1.default.list}>
        <li>
          <a href="https://www.roadsafety.wa.gov.au/RulesSafety/RoadRules/Ethics" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            Western Australia Road Ethics Guidelines
          </a>
        </li>
        <li>
          <a href="https://www.globalroadsafety.org/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            Global Road Safety Partnership
          </a>
        </li>
        <li>
          <a href="https://ec.europa.eu/transport/road_safety_en" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            European Commission Road Safety and Ethics
          </a>
        </li>
      </ul>
    </section>

    <react_router_dom_1.Link to="/quizzes">
      <button className={RoadEthicsPage_module_css_1.default.quizButton}>
        <fa_1.FaHeart /> Take Quiz
      </button>
    </react_router_dom_1.Link>
  </div>);
};
exports.default = RoadEthicsPage;
