import React from "react";
import {
  FaGavel,
  FaLink,
  FaPlayCircle,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";
import styles from "./TrafficLawsPage.module.css";
// import trafficLawsImage from "../assets/traffic-laws.jpg";
// import trafficLawsVideo from "../assets/traffic-laws-video.mp4";

const TrafficLawsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <FaGavel /> Traffic Laws Course
      </h1>

      {/* Introduction Section */}
      <section className={styles.section}>
        <h2>Introduction to Traffic Laws</h2>
        <p>
          Traffic laws are the backbone of road safety. They regulate how
          vehicles, pedestrians, and cyclists interact on the road, ensuring a
          safe and orderly flow of traffic. Violating these laws can lead to
          accidents, injuries, or legal consequences.
        </p>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Traffic_law"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInfoCircle /> Overview of Traffic Laws on Wikipedia
          </a>
        </p>
      </section>

      {/* Key Traffic Laws Section */}
      <section className={styles.section}>
        <h2>Key Traffic Laws You Should Know</h2>
        <ul className={styles.list}>
          <li>
            <strong>Speed Limits:</strong> These limits vary depending on road
            type and location. Driving beyond the speed limit increases the risk
            of accidents.
          </li>
          <li>
            <strong>Right of Way:</strong> Defines when you can proceed and when
            you must yield to others at intersections, pedestrian crossings, or
            roundabouts.
          </li>
          <li>
            <strong>Seat Belt Laws:</strong> Wearing seat belts is mandatory in
            most countries and significantly reduces the severity of injuries in
            accidents.
          </li>
          <li>
            <strong>Driving Under the Influence:</strong> Operating a vehicle
            under the influence of alcohol or drugs is illegal and poses
            significant risks to all road users.
          </li>
        </ul>
        {/* <img
          src={trafficLawsImage}
          alt="Traffic laws enforcement"
          className={styles.image}
        /> */}
        <p>
          <a
            href="https://www.iihs.org/topics/safety-laws"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLink /> Safety Laws Database – Insurance Institute for Highway
            Safety (IIHS)
          </a>
        </p>
      </section>

      {/* Importance Section */}
      <section className={styles.section}>
        <h2>Importance of Following Traffic Laws</h2>
        <p>
          Traffic laws protect lives by preventing reckless behavior and
          ensuring predictable road interactions. They minimize accidents,
          maintain road discipline, and save millions of lives each year.
        </p>
        <p>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaBook /> WHO Fact Sheet on Road Traffic Injuries
          </a>
        </p>
      </section>

      {/* Penalties for Violating Traffic Laws Section */}
      <section className={styles.section}>
        <h2>Penalties for Violating Traffic Laws</h2>
        <p>
          Breaking traffic laws often leads to fines, license suspension, or
          imprisonment, depending on the severity of the violation. Common
          penalties include speeding tickets, DUI charges, and demerit points on
          your driving record.
        </p>
        <p>
          <a
            href="https://www.nolo.com/legal-encyclopedia/driving-violations.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLink /> Nolo's Guide to Traffic Violations and Penalties
          </a>
        </p>
      </section>

      {/* Video Section */}
      <section className={styles.section}>
        <h2>Watch a Quick Overview</h2>
        {/* <video className={styles.video} controls>
          <source src={trafficLawsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <p>
          <a
            href="https://www.youtube.com/results?search_query=traffic+laws+education"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaPlayCircle /> More Educational Videos on Traffic Laws
          </a>
        </p>
      </section>

      {/* Road Safety Resources Section */}
      <section className={styles.section}>
        <h2>Learn More About Traffic Laws</h2>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.gov.uk/browse/driving/highway-code"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              UK Highway Code – Official Rules for Road Users
            </a>
          </li>
          <li>
            <a
              href="https://www.transportation.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              U.S. Department of Transportation – Road Safety Resources
            </a>
          </li>
          <li>
            <a
              href="https://www.roadsafety.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Indian Government Road Safety Portal
            </a>
          </li>
        </ul>
      </section>

      {/* Quiz Button */}
      <button className={styles.quizButton}>
        <FaPlayCircle /> Take Quiz
      </button>
    </div>
  );
};

export default TrafficLawsPage;
