import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { gettingAllUsers } from "../redux/actions/actionType";
import { useDispatch } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsInfoLg } from "react-icons/bs";

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
        <div className="pt-2 ml-2 mr-2 d-flex justify-content-between align-items-center">
          <h6 className="text-smaller font-weight-bold">Add your feed</h6>
          <h6>
            <BsInfoLg />
          </h6>
        </div>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3 d-flex align-items-center">
              <img
                className="mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[5]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[5]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate no-p-no-m mb-1"
              >
                {users[5]?.bio}
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="btn-connect btn-secondary text-dark transparent d-flex align-items-center"
                id="buttons-rounded"
              >
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3 d-flex align-items-center">
              <img
                className="mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[6]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[6]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate no-p-no-m mb-1"
              >
                {users[6]?.bio}
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="btn-connect btn-secondary text-dark transparent d-flex align-items-center"
                id="buttons-rounded"
              >
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3 d-flex align-items-center">
              <img
                className="mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[7]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[7]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate no-p-no-m mb-1"
              >
                {users[7]?.bio}
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="btn-connect btn-secondary text-dark transparent d-flex align-items-center"
                id="buttons-rounded"
              >
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </Button>
            </Col>
          </Row>
        </Col>

        <div id="recommend" className="ml-3 mt-4 pb-1">
          <a href="/#">
            <p>
              View all recommendations <FiArrowRight />
            </p>
          </a>
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
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
