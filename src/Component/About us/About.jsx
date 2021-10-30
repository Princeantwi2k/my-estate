import React from "react";
import pic from "../../images/9.jpeg";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src={pic} alt="pic" className="img" />
          </div>
          <div className="col-md-6">
            <h3>ABOUT </h3>
            <p>
              Our building offers the beauty of premium architecture and elegant
              finishings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
