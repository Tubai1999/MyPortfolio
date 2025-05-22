import React from "react";
import "./Service.css";
import { backendSkills as skills } from "../../assets/skills";

const Service = () => {
  console.log(skills);

  return (
    <div id="service" className="myservice">
      <div className="service-title">
        <h1>MyServices</h1>
      </div>
      <div className="services-container">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="services-format">
              <h4>{skill.id}</h4>
              <h3>{skill.skill}</h3>
              <p>{skill.skillDescription}</p>
              <p>Read more</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
