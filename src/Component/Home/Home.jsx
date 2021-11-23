import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <Container fluid className="home">
        <Row>
          <div className="ck">
            <h2>Lifestyle Estate</h2>

            <h3 className="see">
              <Button variant="danger">
                <Link to="/about" className="link">
                  About us
                </Link>
              </Button>
            </h3>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
