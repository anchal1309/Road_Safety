import React, { useState } from "react";
import {
  FaAmbulance,
  FaPhoneAlt,
  FaLink,
  FaPlayCircle,
  FaExclamationTriangle,
  FaCheckSquare,
  FaUserShield,
} from "react-icons/fa";
import styles from "./TrafficLawsPage.module.css";


const EmergencyResponsePage: React.FC = () => {
  const [checklist, setChecklist] = useState({
    stayCalm: false,
    ensureSafety: false,
    callHelp: false,
    provideAid: false,
    documentIncident: false,
  });

  const handleChecklistToggle = (key: string) => {
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <FaAmbulance /> Emergency Response Course
      </h1>

      {/* Introduction Section */}
      <section className={styles.section}>
        <h2>Why Emergency Response Matters</h2>
        <p>
          Road emergencies can escalate quickly. Knowing how to respond can save
          lives, reduce injuries, and prevent chaos. This course prepares you to
          act responsibly during emergencies, ensuring safety for yourself and
          others.
        </p>
      </section>

      {/* Key Steps Section */}
      <section className={styles.section}>
        <h2>5 Key Steps in Road Emergency Response</h2>
        <ul className={styles.list}>
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
      <section className={styles.section}>
        <h2>Interactive Checklist</h2>
        <p>
          Test your understanding of the steps by checking off completed tasks
          during an emergency simulation:
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
                <FaCheckSquare className={styles.icon} />
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Tips Section */}
      <section className={styles.section}>
        <h2>Tips for Simulating Emergency Situations</h2>
        <p>
          Practice emergency responses regularly to stay prepared. Here’s how:
        </p>
        <ul className={styles.list}>
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
      <section className={styles.section}>
        <h2>Watch: Emergency Response Tips</h2>
        
        <p>
          <a
            href="https://www.youtube.com/results?search_query=road+emergency+response"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaPlayCircle /> More Videos on Emergency Response
          </a>
        </p>
      </section>

      {/* Important Contacts */}
      <section className={styles.section}>
        <h2>Emergency Contacts</h2>
        <ul className={styles.contactList}>
          <li>
            <FaPhoneAlt /> Ambulance:{" "}
            <a href="tel:108" className={styles.link}>
              108
            </a>
          </li>
          <li>
            <FaPhoneAlt /> Police:{" "}
            <a href="tel:100" className={styles.link}>
              100
            </a>
          </li>
          <li>
            <FaPhoneAlt /> Roadside Assistance:{" "}
            <a href="tel:18004251515" className={styles.link}>
              1800 425 1515
            </a>
          </li>
        </ul>
      </section>

      {/* Resources Section */}
      <section className={styles.section}>
        <h2>Additional Resources</h2>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Red Cross - Emergency Preparedness
            </a>
          </li>
          <li>
            <a
              href="https://nhtsa.gov/road-safety/roadside-emergency"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              NHTSA - Roadside Safety
            </a>
          </li>
          <li>
            <a
              href="https://www.ready.gov/road-safety"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ready.gov - Road Safety Tips
            </a>
          </li>
        </ul>
      </section>

      {/* Quiz Button */}
      <button className={styles.quizButton}>
        <FaExclamationTriangle /> Take Quiz
      </button>
    </div>
  );
};

export default EmergencyResponsePage;
