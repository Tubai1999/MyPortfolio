import React from "react";
import "./MyWork.css";
import { MyWorks } from "../../assets/MyWork.js";
import HomeIcon from "@mui/icons-material/Home";
import { ArrowForward } from "@mui/icons-material";

const MyWork = () => {
  return (
    <div id="portfolio" className="Mywork-container">
      <div className="Mywork-title">
        <h2>My Works</h2>
      </div>
      <div className="Mywork-images">
        {MyWorks.map((obj, index) => {
          return (
            <div key={obj.id} className="Mywork-singleImage">
              <img src={obj.image} alt="images" />
            </div>
          );
        })}
      </div>
      <div className="Mywork-showmore">
        <p>Show More</p>
        <ArrowForward />
      </div>
    </div>
  );
};

export default MyWork;
