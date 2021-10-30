import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer fixed-down">
      <Row>
        <Col md={4}>
          <h3
            style={{
              marginLeft: `10%`,
              fontSize: `40px`,
              fontWeight: `bolder`,
              fontStyle: `italic`,
              color: "white",
            }}
          >
            Lifestyle
            <span style={{ color: `orange`, fontFamily: `sans-serif` }}>
              Estate
            </span>
          </h3>
        </Col>

        <Col md={4}>
          <p className="paras">
            &copy; 2021 All Rights Reserved, Lifestyle
            <span style={{ color: `orange`, fontFamily: `sans-serif` }}>
              Estate
            </span>
            .
          </p>
        </Col>

        <Col md={4}>
          <p>phone: +233572211378</p>
          <p>
            email: <Link className="para">antwi2k@gmail.com</Link>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
