import { Link } from "react-router-dom";
import "./Header.css";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <nav className="header-container">
        <div className="trust">
          {/* <FontAwesomeIcon icon="fa-brands fa-hornbill" /> */}
          <h1 className="logo"><BlurOnIcon sx={{ color: "red", fontSize: 45 }}/>Trust </h1>
        </div>
        
      <ul className="nav-items">
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
          <Link className="link-item" to="/login">
            Login{" "}
          </Link>
        </li>
        {/* <li >
          <Link className="link-items"to="/register">Register</Link>
        </li> */}
      </ul>
      {/* <Outlet /> */}
    </nav>
  );
}

export default Header;
