import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeLeft from "./HomeLeft";
import HomeMiddle from "./HomeMiddle";
import HomeRight from "./HomeRight";
import NavbarTop from "./NavbarTop";
import Messenger from "./Messenger";

export default function Homepage() {
  return (
    <>
      <NavbarTop />
      <Container>
        <Row>
          <Col md={3}>
            <HomeLeft />
          </Col>
          <Col md={6}>
            <HomeMiddle />
          </Col>
          <Col md={3}>
            <HomeRight />
          </Col>
        </Row>
      </Container>
      <div id="messenger">
        <Messenger />
      </div>
    </>
  );
}
