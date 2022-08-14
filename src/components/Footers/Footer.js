import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-container1">
      <div className="footer-container">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul classsName="contact-list">
            <li>Trustmail@gmail.com</li>
            <li>+91 1234567891</li>
            <li> Plot no:99, 123 street,Trust Road,India</li>
          </ul>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2022 Trust | Designed By VIJAY</p>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon sx={{ color: "darkblue", fontSize: 35 }} />
          </a>
          <a href="https://www.instagram.com/accounts/login/" target="_blank">
            <InstagramIcon sx={{ color: "red", fontSize: 35 }} />
          </a>
          <a href="https://twitter.com/ " target="_blank">
            <TwitterIcon sx={{ color: "blue", fontSize: 35 }} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <YouTubeIcon sx={{ color: "red", fontSize: 35 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
