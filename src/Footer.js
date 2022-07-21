import React from "react";
import "./Footer.css";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer-container1">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul classsName="contact-list">
            <br />
            <li>Trustmail@gmail.com</li>
            <li>+91 1234567891</li>
            <li> Plot no:99, 123 street,Trust Road,India</li>
          </ul>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2022 Trust | All Rights Reserved By VIJAY</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <br />
          <FacebookIcon sx={{ color: "darkblue", fontSize: 35 }} />
          <InstagramIcon sx={{ color: "red", fontSize: 35 }} />
          <TwitterIcon sx={{ color: "skyblue", fontSize: 35 }} />
          <YouTubeIcon sx={{ color: "red", fontSize: 35 }} />
          <LinkedInIcon sx={{ color: "skyblue", fontSize: 35 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
