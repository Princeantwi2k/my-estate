import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Container fluid className="home">
        <Row>
          <div className="ck">
            <h2>Lifestyle Estate</h2>

            <h3 className="see">
              <Button variant="danger">Contact Us!</Button>
            </h3>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
