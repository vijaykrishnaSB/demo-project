import React from "react";
import "./About.css";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ElderlyIcon from "@mui/icons-material/Elderly";

const About = () => {
  return (
    <div className="about-container">
      <h2>Trustees</h2>
      <br />
      <div className="Appcard">
        <div className="managmentcontainer">
          <img src={image2} className="image" />
          <h3>APJ Abdual Kalam</h3>
          <h4>Founder</h4>
          <p>
            Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace
            scientist who served as the 11th President of India from 2002 to
            2007. He was born and raised in Rameswaram, Tamil Nadu and studied
            physics and aerospace engineering.
          </p>
          <div className="Symbol"></div>
          <RocketLaunchIcon className="icon" />
        </div>
        <div
          className="
            managmentcontainer"
        >
          <img src={image3} className="image" />
          <h3>Mahathma Gandhi</h3>
          <h4>Co-Founder</h4>
          <p>
            Gandhi was an Indian lawyer, and political ethicist who employed
            nonviolent resistance to lead the successful campaign for India's
            independence from British rule, and to later inspire movements for
            civil rights and freedom across the world.
          </p>
          <div className="Symbol"></div>
          <ElderlyIcon className="icon" />
        </div>
        <div
          className="
            managmentcontainer"
        >
          <img src={image4} className="image" />
          <h3>Subhash Chandra Bose</h3>
          <h4>Co-Founder</h4>
          <p>
            Netaji Subhash Chandra Bose is known for his role in India’s independence movement and a
            leader of the Indian National Congress & militant wing and known for
            his advocacy of socialist policies.
          </p>
          <div className="Symbol"></div>
          <MilitaryTechIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
