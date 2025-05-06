import React from "react";
import "../../component/About/About.css";
import deer from "../../assets/Deer-SVG.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={deer} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit od a eligendi quidem suscipit nemo, dicta
              reiciendis, nesciunt, ex asperiores soluta in fuga impedit
              molestiae vitae. Dolore, optio similique?
            </p>
            <p>Lorem ipsum dolor sit, ceat neque quo saepe aperiam!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Springboot</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>project completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
