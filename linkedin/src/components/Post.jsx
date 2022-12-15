import {
  Row,
  Col,
  Dropdown,
  Badge,
  Button,
  ButtonGroup,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Post = ({ id, email, name, surname, image, text, title, i }) => {
  const [show, setShow] = useState(false);
  const [fuck, setFuck] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bg-light rounded mt-2 p-2">
        <Row>
          <Col xs={10} className="d-flex">
            <img
              src={image}
              style={{
                width: "42px",
                height: "42px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "0.5rem",
              }}
              className="mr-2"
            />
            <div>
              <div>
                <p className="font-weight-bold text-smaller p-0 m-0">
                  {name} {surname}
                </p>
                <p className="text-smaller"> {title}</p>
              </div>
            </div>
          </Col>
          <Col xs={1}>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="transparent text-dark"
                  style={{ border: "none" }}
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <p>{text}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <img src={"https://picsum.photos/200" + i} className="w-100" />
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul class="list-group">
            <li class="list-group-item border-bottom transparent">
              <div className="d-flex align-items-start">
                <div className="ml-4">
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Text:
                    </label>
                    <div class="col-sm-9">
                      <Form.Group
                        type="text"
                        class="form-control-plaintext transparent"
                        controlId="text2"
                      >
                        <Form.Control
                        // defaultValue={fuck.company}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Post;
