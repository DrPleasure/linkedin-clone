import { borderLeft, borderRadius } from "@mui/system";
import React from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
export default function HomeMiddle() {
  const user = useSelector((state) => state.user.user);
  return (
    <div
      id="firstMid"
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
      }}
      className="mt-3"
    >
      <Row>
        <div className="ml-4 mt-3">
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
        <div className="mt-4 ml-1">
          <InputGroup type="text">
            <Form.Control
              style={{ width: "25vw", borderRadius: "15px" }}
              placeholder="type here to post bullshit"
            />
          </InputGroup>
        </div>
      </Row>
      <Row className="mt-3 d-flex justify-content-md-around">
        <p>
          <MdPhotoSizeSelectActual />
          Photo
        </p>
        <p>
          <BsFillPlayBtnFill />
          Video
        </p>
        <p>
          <BsFillCalendarDateFill />
          Event
        </p>
        <p>
          <MdArticle />
          Write an Article
        </p>
      </Row>
    </div>
  );
}
