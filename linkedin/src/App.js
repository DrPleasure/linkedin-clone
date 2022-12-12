import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid id="main">
          <Container className="mt-5">
            <Row>
              <Col xs={8} className="bg-dark rounded m-1">
                <h1>sweden</h1>
              </Col>
              <Col xs={3} className="bg-dark rounded m-1">
                <Row className="text-light ">
                  <Col xs={12}>
                    <p>
                      Edit public profile & URL <AiOutlineQuestionCircle />
                    </p>
                  </Col>

                  <Col xs={12}>
                    <p>
                      Add profile in another language{" "}
                      <AiOutlineQuestionCircle />
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
