import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ScrollNavbar() {
  let myID = document.getElementById("ScrollNavbar");

  return (
    <div id="ScrollNavbar" className="cta hide">
      <Container>
        <hr></hr>
        <Row>
          <Col className="col-7">
            <Row>
              Picture
              <Row className="flex-direction-column">
                <Col>Don Douglas</Col>
                <Col>I'll do anything</Col>
              </Row>
            </Row>
          </Col>
          <Col>
            <Button
              id="MoreButton"
              variant="outline-secondary"
              className="bold"
            >
              More
            </Button>{" "}
            <Button id="AddProfile" className="bold">
              Add profile section
            </Button>{" "}
            <Button id="OpenToButton" variant="primary" className="bold">
              Open to
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
