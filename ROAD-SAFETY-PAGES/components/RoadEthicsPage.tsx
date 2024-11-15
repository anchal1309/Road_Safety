import React from "react";
import {
  FaHandshake,
  FaLink,
  FaPlayCircle,
  FaInfoCircle,
  FaHeart,
} from "react-icons/fa";
import styles from "../styles/RoadEthicsPage.module.css";
import roadEthicsImage from "../assets/road-ethics.jpg";
import roadEthicsVideo from "../assets/road-ethics-video.mp4";

const RoadEthicsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <FaHandshake /> Road Ethics Course
      </h1>

      {/* Introduction Section */}
      <section className={styles.section}>
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
      <section className={styles.section}>
        <h2>Key Principles of Road Ethics</h2>
        <ul className={styles.list}>
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
        <img
          src={roadEthicsImage}
          alt="Promoting ethics on the road"
          className={styles.image}
        />
        <p>
          <a
            href="https://www.sustainabletransport.org/topics/road-safety/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLink /> Learn more about sustainable transport and ethics
          </a>
        </p>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <h2>Benefits of Ethical Road Behavior</h2>
        <p>
          Ethical road behavior positively impacts society in numerous ways:
        </p>
        <ul className={styles.list}>
          <li>Reduces stress and road rage among drivers.</li>
          <li>Enhances safety and reduces the number of accidents.</li>
          <li>Improves traffic flow and reduces congestion.</li>
          <li>Builds a culture of trust and mutual respect.</li>
        </ul>
        <p>
          <a
            href="https://www.who.int/roadsafety/en/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInfoCircle /> WHO Road Safety and Ethical Guidelines
          </a>
        </p>
      </section>

      {/* Video Section */}
      <section className={styles.section}>
        <h2>Watch: Road Ethics in Action</h2>
        <video className={styles.video} controls>
          <source src={roadEthicsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          <a
            href="https://www.youtube.com/results?search_query=road+ethics+videos"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaPlayCircle /> More Educational Videos on Road Ethics
          </a>
        </p>
      </section>

      {/* Resources Section */}
      <section className={styles.section}>
        <h2>Additional Resources</h2>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.roadsafety.wa.gov.au/RulesSafety/RoadRules/Ethics"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Western Australia Road Ethics Guidelines
            </a>
          </li>
          <li>
            <a
              href="https://www.globalroadsafety.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Global Road Safety Partnership
            </a>
          </li>
          <li>
            <a
              href="https://ec.europa.eu/transport/road_safety_en"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              European Commission Road Safety and Ethics
            </a>
          </li>
        </ul>
      </section>

      {/* Quiz Button */}
      <button className={styles.quizButton}>
        <FaHeart /> Take Quiz
      </button>
    </div>
  );
};

export default RoadEthicsPage;
