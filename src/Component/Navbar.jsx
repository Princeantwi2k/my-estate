import React from "react";
import "./Nav.css";
import pic1 from "../images/r.png";
const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-jo" sm={6} md={12}>
      <div class="navbar-header">
        <img src={pic1} alt="pic" className="img" />
      </div>

      <ul>
        <li class="active">Home</li>
        <li>About us</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
