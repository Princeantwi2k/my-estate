import React from "react";
import "./Nav.css";
import pic1 from "../images/r.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-jo fixed-top" sm={6} md={12}>
      <div class="navbar-header">
        <img src={pic1} alt="pic" className="img" />
      </div>

      <ul>
        <li>
          <Link to="/" class="active" id="day">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" class="active">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
