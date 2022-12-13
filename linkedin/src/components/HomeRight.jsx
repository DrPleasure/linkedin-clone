import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { gettingAllUsers } from "../redux/actions/actionType";
import { useDispatch } from "react-redux";
export default function HomeRight() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(gettingAllUsers());
  }, []);
  console.log(users);
  return (
    <>
      <div
        id="thirdTop"
        style={{ backgroundColor: "white", borderRadius: "5px" }}
        className="mt-3"
      >
        <div className="pt-2 ml-3">
          <h5>Add your feed</h5>
        </div>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3">
              <img
                className=" mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[0]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[0]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate"
              >
                {users[0]?.bio}
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3">
              <img
                className=" mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[0]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[0]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate"
              >
                {users[0]?.bio}
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3">
              <img
                className=" mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[0]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[0]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate"
              >
                {users[0]?.bio}
              </p>
            </Col>
          </Row>
        </Col>
        <div className="ml-3 mt-4 pb-3">
          <p>View all recommendations </p>
        </div>
      </div>
      <div id="side-footer" className="text-center mt-3">
        <Row className="right__side__footer">
          <Col xs={12}>
            <a href="/"> about </a>
            <a href="/" className="mx-2">
              accessibility
            </a>
            <a href="/"> help center </a>
          </Col>
          <Col xs={12}>
            <a href="/"> privacy & terms</a>
            <a href="/" className="mx-2">
              ad choises
            </a>
          </Col>
          <Col xs={12}>
            <a href="/"> advertising </a>
            <a href="/" className="mx-2">
              business services
            </a>
          </Col>
          <Col xs={12}>
            <a href="/"> get the linkedin app </a>
            <a href="/" className="mx-2">
              more
            </a>
          </Col>
          <Col xs={12} className="d-flex flex-row mt-3 justify-content-center">
            <img
              src="./Images/logo2.png"
              className="mr-2"
              id="linkedin-logo"
              alt="Linked img"
            />

            <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </div>
    </>
  );
}
