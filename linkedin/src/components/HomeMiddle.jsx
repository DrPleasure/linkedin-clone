import React, { useState } from "react";
import { Form, InputGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { TiWorld } from "react-icons/ti";
import { MdArticle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { gettingAllPosts } from "../redux/actions/actionType";
import { useEffect } from "react";

import Post from "./Post";

export default function HomeMiddle() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.user.posts);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(gettingAllPosts());
  }, []);
  const JokesOnYou = async () => {
    const postInfo = {
      text: document.querySelector("#text").value,
    };
    console.log(postInfo);

    const options = {
      method: "POST",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Posted!");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(gettingAllPosts(posts._id));
    handleClose();
  };

  return (
    <>
      <div
        id="firstMid"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
        }}
        className="mt-3"
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new post!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="mr-2 ml-2">
              <div className="d-flex align-items-center">
                <img
                  src={user.image}
                  style={{ width: "38px", height: "38px", borderRadius: "50%" }}
                />
                <div className="ml-2">
                  <p className="no-p-no-m font-weight-bold">
                    {user.name} {user.surname}
                  </p>
                  <Button
                    className="transparent text-dark btn-secondary  pr-1 pl-1 pt-0 pb-0 text-muted"
                    id="buttons-rounded"
                  >
                    <TiWorld /> Anyone <GoTriangleDown />
                  </Button>
                </div>
              </div>
              <Form.Group type="text" className="mt-3" controlId="text">
                <Form.Control
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  placeholder="What do you want to talk about?"
                />
              </Form.Group>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              id="buttons-rounded"
              className="pt-1 pb-1"
              onClick={JokesOnYou}
            >
              Post
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            <div className="mt-3">
              <a href="/">
                <img
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "solid white 3px",
                    objectFit: "cover",
                  }}
                  src={user.image}
                  alt="..."
                  id="userImg"
                />
              </a>
            </div>
            <div className="mt-3 ml-1">
              {/* <InputGroup type="text" onClick={handleShow}>
                <Form.Control
                  style={{ width: "22vw", borderRadius: "15px" }}
                  placeholder="type here to post"
                />
              </InputGroup> */}
              <Button
                className="transparent text-muted text-left btn-secondary"
                style={{ width: "25vw", borderRadius: "15px" }}
                onClick={handleShow}
              >
                Press here to post
              </Button>
            </div>
          </Row>
        </div>
        <Row className="mt-3 pb-3 d-flex justify-content-md-around align-items-center">
          <div className="d-flex align-items-center">
            <MdPhotoSizeSelectActual
              className="mr-2"
              size={20}
              style={{ color: "#2bbfff", className: "global-class-name" }}
            />
            <span className="text-muted">Photo</span>
          </div>
          <div className="d-flex align-items-center">
            <BsFillPlayBtnFill
              className="mr-2"
              size={20}
              style={{ color: "#20c822", className: "global-class-name" }}
            />
            <span className="text-muted">Video</span>
          </div>{" "}
          <div className="d-flex align-items-center">
            <BsFillCalendarDateFill
              className="mr-2"
              size={20}
              style={{ color: "#ed8900", className: "global-class-name" }}
            />
            <span className="text-muted">Event</span>
          </div>{" "}
          <div className="d-flex align-items-center">
            <MdArticle
              className="mr-2"
              size={20}
              style={{ color: "#ff4600", className: "global-class-name" }}
            />
            <span className="text-muted"> Write an Article</span>
          </div>
        </Row>
      </div>
      <Row className="d-flex align-items-center">
        <Col xs={10}>
          <hr className="w-100 bg-secondary" />
        </Col>
        <Col xs={2} className="d-flex text-extra-small">
          <p className="text-muted m-0 p-0">Sort by: </p>&nbsp;
          <p className="p-0 m-0"> Top</p>
        </Col>
      </Row>

      {posts.slice(0, 10).map((post, i) => (
        <Post
          key={post.id}
          image={post?.user.image}
          text={post.text}
          post_id={post._id}
          username={post?.user.username}
          name={post?.user?.name}
          surname={post?.user?.surname}
          title={post?.user.title}
          i={i}
        />
      ))}
    </>
  );
}
