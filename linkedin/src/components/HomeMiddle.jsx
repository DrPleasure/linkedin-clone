import { borderLeft, borderRadius } from "@mui/system";
import React, { useState } from "react";
import { Form, InputGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { blue } from "@mui/material/colors";
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
  console.log(posts);
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
            <div className="mt-3 ml-1">
              <InputGroup type="text">
                <Form.Control
                  style={{ width: "22vw", borderRadius: "15px" }}
                  placeholder="type here to post"
                />
              </InputGroup>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Post</Button>
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
              <InputGroup type="text" onClick={handleShow}>
                <Form.Control
                  style={{ width: "22vw", borderRadius: "15px" }}
                  placeholder="type here to post"
                />
              </InputGroup>
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
