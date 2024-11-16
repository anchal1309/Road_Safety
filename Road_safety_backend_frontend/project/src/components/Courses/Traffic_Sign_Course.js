"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const RoadEthicsPage_module_css_1 = __importDefault(require("./RoadEthicsPage.module.css"));
const react_router_dom_1 = require("react-router-dom");
const Traffic_Sign_Course = () => {
    return (<div className={RoadEthicsPage_module_css_1.default.container}>
      <h1 className={RoadEthicsPage_module_css_1.default.header}>
        <fa_1.FaTrafficLight /> Traffic Signs Course
      </h1>

      {/* Introduction Section */}
      <section className={RoadEthicsPage_module_css_1.default.section}>
        <h2>Introduction to Traffic Signs</h2>
        <p>
          Traffic signs are a fundamental aspect of road safety. They serve to
          inform and guide drivers, pedestrians, and cyclists to maintain safe
          and efficient road use. Proper understanding of traffic signs is
          essential for everyone using the road.
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Traffic_sign" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            <fa_1.FaInfoCircle /> General Overview of Traffic Signs on Wikipedia
          </a>
        </p>
      </section>

      {/* Types of Traffic Signs Section */}
      <section className={RoadEthicsPage_module_css_1.default.section}>
        <h2>Types of Traffic Signs</h2>
        <ul className={RoadEthicsPage_module_css_1.default.list}>
          <li>
            <strong>Regulatory Signs:</strong> These signs enforce road rules,
            such as speed limits and "No Entry" areas.
          </li>
          <li>
            <strong>Warning Signs:</strong> These signs alert drivers of
            potential dangers ahead, like sharp curves, animal crossings, or
            steep hills.
          </li>
          <li>
            <strong>Guide Signs:</strong> Provide navigational information,
            including direction, distance, and services available on the road.
          </li>
        </ul>
        {/* <img
          src={trafficSignsImage}
          alt="Examples of various traffic signs"
          className={styles.image} */}
        {/* /> */}
        <p>
          <a href="https://www.trafficsign.us/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            <fa_1.FaLink /> Explore Different Types of Traffic Signs at
            TrafficSign.us
          </a>
        </p>
      </section>

      {/* Meaning and Importance Section */}
      <section className={RoadEthicsPage_module_css_1.default.section}>
        <h2>Meaning and Importance of Traffic Signs</h2>
        <p>
          Each traffic sign serves a unique purpose, guiding users to follow
          rules, avoid hazards, and navigate roadways safely. Regulatory signs
          ensure adherence to laws, while warning signs prepare drivers for
          potential obstacles. Guide signs help with navigation and improve the
          flow of traffic.
        </p>
        <p>
          <a href="https://www.nhtsa.gov/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            <fa_1.FaBook /> National Highway Traffic Safety Administration (NHTSA) –
            Road Safety Information
          </a>
        </p>
      </section>

      {/* How to Read Traffic Signs Section */}
      <section className={RoadEthicsPage_module_css_1.default.section}>
        <h2>How to Read Traffic Signs Effectively</h2>
        <p>
          Understanding the color, shape, and symbols on traffic signs is
          crucial. For instance, red indicates prohibitions, while green is used
          for directional guidance. Triangular signs usually denote warnings,
          whereas circular signs are regulatory.
        </p>
        <p>
          <a href="https://www.driving-tests.org/beginner-drivers/how-to-read-traffic-signs/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            <fa_1.FaLink /> How to Read Traffic Signs: Driving-Tests.org Guide
          </a>
        </p>
      </section>

      {/* Video Section */}
      <section className={RoadEthicsPage_module_css_1.default.section}>
        <h2>Watch a Quick Overview</h2>
        {/* <video className={styles.video} controls>
          <source src={trafficSignsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <p>
          <a href="https://www.youtube.com/results?search_query=traffic+signs+education" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
            <fa_1.FaPlayCircle /> More Educational Videos on Traffic Signs
          </a>
        </p>
      </section>

      {/* Road Safety Resources Section */}
      <section className={RoadEthicsPage_module_css_1.default.section}>
        <h2>Road Safety Resources</h2>
        <p>
          Staying informed about road safety is essential for reducing accidents
          and ensuring safe travel. Here are some helpful resources:
        </p>
        <ul className={RoadEthicsPage_module_css_1.default.list}>
          <li>
            <a href="https://www.roadsafety.gov/" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
              Road Safety.gov – U.S. Government's Road Safety Resources
            </a>
          </li>
          <li>
            <a href="https://www.who.int/roadsafety" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
              World Health Organization – Global Road Safety
            </a>
          </li>
          <li>
            <a href="https://www.rospa.com/road-safety" target="_blank" rel="noopener noreferrer" className={RoadEthicsPage_module_css_1.default.link}>
              Royal Society for the Prevention of Accidents (RoSPA) – Road
              Safety
            </a>
          </li>
        </ul>
      </section>

      <react_router_dom_1.Link to="/courses/TrafficSignsQuiz">
        <button className={RoadEthicsPage_module_css_1.default.quizButton}>
          <fa_1.FaPlayCircle /> Take Quiz
        </button>
      </react_router_dom_1.Link>
    </div>);
};
exports.default = Traffic_Sign_Course;
