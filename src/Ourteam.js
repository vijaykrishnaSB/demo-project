import React from "react";
import "./Ourteam.css";
import image8 from "./images/image8.jpg";
import image2 from "./images/image2.jpg";
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
    <div className="team-container">
      <img className="our-container" src={image8} alt="" />
      <h1 className="ourteam-title">Our Team</h1>
      <h4 className="allourteam-title">
        {" "}
        our team put full effort to fulfill our & your goals!!{" "}
      </h4>
      <br></br>
      {/* <h2>Our Team Members</h2> */}
      <div className="member-list">
        <div className="managment-container">
          <img src={image19} className="image" />
          <h3>Sundar Pichai</h3>
          <h5>Admin Department</h5>
        </div>
        <div className="managment-container">
          <img src={image13} className="image" />
          <h3>Sachin Tendulkar</h3>
          <h5>Finance Department</h5>
        </div>
        <div className="managment-container">
          <img src={image18} className="image" />
          <h3>Roger Federer</h3>
          <h5>Programme Manager</h5>
        </div>
        <div className="managment-container">
          <img src={image15} className="image" />
          <h3>Yuraj Singh</h3>
          <h5>Healthcare Department</h5>
        </div>
        <div className="managment-container">
          <img src={image16} className="image" />
          <h3>Rahul Dravid</h3>
          <h5>HR</h5>
        </div>
        <div className="managment-container">
          <img src={image11} className="image" />
          <h3>Micheal Jackson</h3>
          <h5>Fundraiser</h5>
        </div>
        <div className="managment-container">
          <img src={image14} className="image" />
          <h3>Valentino Rossi</h3>
          <h5>Fundraiser</h5>
        </div>
        <div className="managment-container">
          <img src={image17} className="image" />
          <h3>Virat Kohli</h3>
          <h5>Fundraiser</h5>
        </div>
        <div className="managment-container">
          <img src={image12} className="image" />
          <h3>Micheal Schumacher</h3>
          <h5>Education Department</h5>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
