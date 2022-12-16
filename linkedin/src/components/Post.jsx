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
import { gettingAllPosts } from "../redux/actions/actionType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GrLike } from "react-icons/gr";
import { CgComment } from "react-icons/cg";
import { FiSend } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Post = ({ id, email, name, surname, image, text, title, i, post_id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.user.posts);
  const updatePost = async () => {
    const postInfo = {
      text: document.querySelector("#text").value,
    };
    console.log(postInfo);
    const options = {
      method: "PUT",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${post_id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Posted!");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    // dispatch(gettingAllPosts(posts._id));
    handleClose();

    dispatch(gettingAllPosts(posts._id));
  };
  //--------------------------------------------------------------------------------
  const deletePost = async () => {
    const options = {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${post_id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Deleted!");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    handleClose();
    dispatch(gettingAllPosts(posts._id));
  };

  return (
    <>
      <div className="bg-light rounded mt-2 p-2">
        <Row className="d-flex justify-content-between ml-1 mr-1">
          <div className="d-flex">
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
          </div>
          <div>
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
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
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
        <Row className="d-flex justify-content-between mr-2 ml-2">
          <div>
            <button
              type="button"
              className="btn btn-light text-dark mt-1 d-flex align-items-center justify-content-center"
            >
              <GrLike className="mr-2" />
              Like
            </button>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-light text-dark mt-1 d-flex align-items-center justify-content-center"
            >
              <CgComment className="mr-2" />
              Comment
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light text-dark mt-1 d-flex align-items-center justify-content-center"
            >
              <BiRepost className="mr-2" />
              Repost
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-light text-dark mt-1 d-flex align-items-center justify-content-center"
            >
              <FiSend className="mr-2" />
              Send
            </button>
          </div>
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
                        controlId="text"
                      >
                        <Form.Control
                          // defaultValue={fuck.company}
                          defaultValue={text}
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
          <Button variant="danger" onClick={deletePost}>
            Delete
          </Button>
          <Button variant="primary" onClick={updatePost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Post;
