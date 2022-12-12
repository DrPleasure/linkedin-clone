import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
export default class MyFooter extends Component {
  render() {
    return (
      <Container id="footing" className="smaller mt-5">
        <Row>
          <Col>
            <Navbar className="d-flex flex-column">
              <Nav.Link className="d-flex">
                <img
                  style={{ width: "8rem" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
                  alt="..."
                />
              </Nav.Link>
              <Nav.Item>
                <Nav.Link className="disabled">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Community GuideLines</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Privacy & Terms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Sales Solutions</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="disabled">Safety Center</Nav.Link>
              </Nav.Item>
            </Navbar>
          </Col>
          <Col>
            <Navbar className="d-flex flex-column">
              <Nav.Item>
                <Nav.Link className="disabled">Accessibility</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Careers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Ad Choice</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Mobile</Nav.Link>
              </Nav.Item>
            </Navbar>
          </Col>
          <Col>
            <Navbar className="d-flex flex-column">
              <Nav.Item>
                <Nav.Link className="disabled">Talent Solutions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Marketing Solutions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Advertising</Nav.Link>
              </Nav.Item>
            </Navbar>
          </Col>
          <Col>
            <Navbar className="d-flex flex-column">
              <Nav.Item>
                <Nav.Link className="disabled">
                  <h2>Questions</h2>
                  <p>Visit our Help Center</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Terms Of Use</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="disabled">Corporate Information</Nav.Link>
              </Nav.Item>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}
