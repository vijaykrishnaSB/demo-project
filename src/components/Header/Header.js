import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header-container">
      <div className="trust">
        <h1 className="logo">Trust </h1>
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
      </ul>
    </nav>
  );
}

export default Header;
