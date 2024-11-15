import React, { useState } from "react";
import {
  FaCar,
  FaTools,
  FaCheckCircle,
  FaWrench,
  FaPlayCircle,
} from "react-icons/fa";
import styles from "./VehicleMaintenancePage.module.css";

const VehicleMaintenancePage: React.FC = () => {
  const [checklist, setChecklist] = useState({
    oilChange: false,
    tirePressure: false,
    batteryCheck: false,
    fluidLevels: false,
    brakeInspection: false,
  });

  const handleChecklistToggle = (key: string) => {
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <FaCar /> Vehicle Maintenance Course
      </h1>

      {/* Introduction Section */}
      <section className={styles.section}>
        <h2>Why Vehicle Maintenance is Important</h2>
        <p>
          Proper vehicle maintenance not only extends the life of your car but
          also ensures safety on the road. This course highlights the key tasks
          you should perform regularly to keep your vehicle in optimal
          condition.
        </p>
      </section>

      {/* Essential Maintenance Tasks */}
      <section className={styles.section}>
        <h2>Essential Maintenance Tasks</h2>
        <ul className={styles.list}>
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
        <img
          src=""
          alt="Vehicle maintenance tasks"
          className={styles.image}
        />
      </section>

      {/* Interactive Checklist */}
      <section className={styles.section}>
        <h2>Interactive Maintenance Checklist</h2>
        <p>
          Use this checklist to track your regular vehicle maintenance tasks:
        </p>
        <ul className={styles.checklist}>
          {Object.entries(checklist).map(([key, value]) => (
            <li key={key} className={styles.checkItem}>
              <input
                type="checkbox"
                id={key}
                checked={value}
                onChange={() => handleChecklistToggle(key)}
              />
              <label htmlFor={key}>
                <FaCheckCircle className={styles.icon} />
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Video Tutorials Section */}
      <section className={styles.section}>
        <h2>Watch: Vehicle Maintenance Tips</h2>
        
        <p>
          <a
            href="https://www.youtube.com/results?search_query=vehicle+maintenance+tips"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaPlayCircle /> Explore More Maintenance Videos
          </a>
        </p>
      </section>

      {/* Tips Section */}
      <section className={styles.section}>
        <h2>Top Vehicle Maintenance Tips</h2>
        <p>Follow these tips for hassle-free vehicle maintenance:</p>
        <ul className={styles.list}>
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
      <section className={styles.section}>
        <h2>Additional Resources</h2>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.carcare.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Car Care Council - Comprehensive Maintenance Guides
            </a>
          </li>
          <li>
            <a
              href="https://www.consumerreports.org/cars/how-to-maintain-your-car/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Consumer Reports - How to Maintain Your Car
            </a>
          </li>
          <li>
            <a
              href="https://www.aaa.com/autorepair"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              AAA Auto Repair and Maintenance Resources
            </a>
          </li>
        </ul>
      </section>

      {/* Quiz Button */}
      <button className={styles.quizButton}>
        <FaWrench /> Take Quiz
      </button>
    </div>
  );
};

export default VehicleMaintenancePage;
