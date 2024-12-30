import React from "react";
import "./About.css";
import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_image} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Our college fosters academic excellence and innovation, empowering
          students with knowledge, skills, and values to thrive in a globalized
          world.
        </p>
        <p>
          Dedicated to holistic development, our institution combines
          cutting-edge education with a supportive community, preparing future
          leaders.
        </p>
        <p>
          A hub of learning and growth, our college offers dynamic opportunities
          for students to excel academically and personally.
        </p>
      </div>
    </div>
  );
};

export default About;
