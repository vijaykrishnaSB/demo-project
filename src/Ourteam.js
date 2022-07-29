import React from "react";
import "./Ourteam.css";

import image8 from "./images/image8.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image15 from "./images/image15.jpg";
import image16 from "./images/image16.jpg";
import image17 from "./images/image17.jpg";
import image18 from "./images/image18.jpg";
import image19 from "./images/image19.jpg";

const Ourteam = () => {
  return (
    <div className="ourteam-container">
      <div className="team-container">
        <img className="our-container" src={image8} alt="" />
        <h1 className="ourteam-title">Our Team</h1>
        <h4 className="allourteam-title">
          our team put full effort to fulfill our & your goals!!
        </h4>
        <br></br>
        <div className="member-list">
          <div className="managment-container">
            <img src={image19} className="image" />
            <h4>Sundar Pichai</h4>
            <h6>Admin Department</h6>
          </div>
          <div className="managment-container">
            <img src={image13} className="image" />
            <h4>Tendulkar</h4>
            <h6>Finance </h6>
          </div>
          <div className="managment-container">
            <img src={image18} className="image" />
            <h4>Federer</h4>
            <h6>Event Manager</h6>
          </div>
          <div className="managment-container">
            <img src={image15} className="image" />
            <h4>Yuraj Singh</h4>
            <h6>Healthcare</h6>
          </div>
          <div className="managment-container">
            <img src={image16} className="image" />
            <h4>Rahul Dravid</h4>
            <h6>HR</h6>
          </div>
          <div className="managment-container">
            <img src={image11} className="image" />
            <h4>MJ</h4>
            <h6>Fundraiser</h6>
          </div>
          <div className="managment-container">
            <img src={image14} className="image" />
            <h4>V Rossi</h4>
            <h6>Fundraiser</h6>
          </div>
          <div className="managment-container">
            <img src={image17} className="image" />
            <h4>Virat Kohli</h4>
            <h6>Fundraiser</h6>
          </div>
          <div className="managment-container">
            <img src={image12} className="image" />
            <h4>Schumacher</h4>
            <h6>Education</h6>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Ourteam;
