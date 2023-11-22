import React, { Component } from "react";
import "../App.css";

const Experience = (props) => {
  const { picture, role, company, id } = props;
  return (
    <div id={id} className="about-experience-grid-item">
      <div className="about-experience">
        <div className="about-experience-image-frame">
          <img className="about-experience-image" src={picture} />
        </div>
        <div className="about-experience-title-frame">
          <div className="about-experience-title">{company}</div>
          <div className="about-experience-role">
            <span className="name">[</span> {role}
            <span className="name">]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
