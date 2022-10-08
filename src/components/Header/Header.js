import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";


function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="header-container">
      <div className="trust">
        <h1 className="logo">Trust </h1>
      </div>

      <ul
        className={isMobile ? "nav-links-mobiles" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link className="link-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/contactus">
            Contactus
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/ourteam">
            Ourteam
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/volunteertable">
            Volunteer
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/login">
            Login{" "}
          </Link>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        <DehazeIcon sx={{ color: "white" }} />
        {isMobile ? (
          <i className="fas fa-time"></i>
        ) : (
          <i className="fas fa-bar"></i>
        )}
      </button>
    </nav>
  );
}

export default Header;
