import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  gettingUsers,
  gettingAllUsers,
  gettingExpOfUsers,
} from "../redux/actions/actionType";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiOutlineQuestionCircle,
  AiFillEye,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { IoMdStats } from "react-icons/io";
import Skillimage from "./Skillimage";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOtherProfile } from "../redux/actions/actionType";
import ExperiencesUser from "./ExperiencesUser";

export const ProfileUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const profileDetails = useSelector((state) => state.user.otherUser);
    const userid = params.userid
    console.log("user id:", userid)
    console.log(profileDetails);
    console.log(profileDetails._id);
   

    const users = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(gettingAllUsers());
  }, []);

  useEffect(() => {
    dispatch(getOtherProfile(userid));
  }, [userid]);

  return (
    <>
      <div className="App pt-1 pb-3">
        <header className="App-header">
          <Container fluid id="main">
            <Container className="mt-5">
              <Row>
                <Col xs={8} className="rounded mr-4" id="main-pic-profile">
                  <div className="bg-light">
                    <div class="image-container mb-5">
                      <img
                        src="https://ultrawidewallpapers.com/wp-content/uploads/2016/08/shaded-forest-3440x1440.jpg"
                        className="w-100 rounded"
                        id="wide-ratio"
                        alt="forest"
                      />
                      <div>
                        <img
                          src={profileDetails.image}
                          style={{
                            width: "180px",
                            height: "180px",
                            border: "solid #F8F9FA 5px",
                            objectFit: "cover",
                          }}
                          className="super-rounded bottom-left"
                          alt="blankprofile"
                        />
                      </div>
                      <div>
                        <FiEdit2
                          size={32}
                          class="top-right bg-light text-dark p-1 super-rounded"
                        />
                      </div>
                    </div>
                    <Row>
                      <Col className="mx-3 mt-5 text-dark">
                        <h2>
                          {profileDetails.name} {profileDetails.surname}
                        </h2>
                        <p>{profileDetails.title}</p>
                        <div className="d-flex">
                          <p className="text-muted mr-2">{profileDetails.area}</p>
                          <a href="#">Contact info</a>
                        </div>
                        <a href="#">35 conntections</a>
                        <div className="mt-1">
                          <Button
                            className="btn text-light btn-primary mr-2"
                            id="buttons-rounded"
                          >
                            Open to
                          </Button>
                          <Button
                            className="btn text-dark btn-primary mr-2 transparent"
                            id="buttons-rounded"
                          >
                            Add profile section
                          </Button>
                          <Button
                            className="btn text-dark btn-secondary mr-2 transparent"
                            id="buttons-rounded"
                          >
                            More
                          </Button>
                        </div>
                        <div className="d-flex justify-content-start job-search-profile">
                          <div className="mt-3 ml-1 mb-3 text-dark p-2 rounded custom-darker-bg">
                            <p className="no-p-no-m">Open to work</p>
                            <p className="no-p-no-m smaller-text">
                              Junior Web Developer, Frontend Developer, Junior
                              Developer and Junior Programmer roles
                            </p>
                            <a href="#" className="no-p-no-m smaller-text">
                              See all details
                            </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-3 bg-light rounded p-3">
                    <h3>Analytics</h3>
                    <p className="text-muted align-items-center">
                      <AiFillEye /> Private to you
                    </p>
                    <Row>
                      <Col xs={4} className="d-flex">
                        <MdPeopleAlt size={35} className="text-muted" />
                        <div className="ml-2">
                          <p className="font-weight-bold no-p-no-m">
                            29 Profile Views
                          </p>
                          <p>Discover who's viewed your profile.</p>
                        </div>
                      </Col>
                      <Col xs={4} className="d-flex">
                        <IoMdStats size={35} className="text-muted" />
                        <div className="ml-2">
                          <p className="font-weight-bold no-p-no-m">
                            100 Post Impressions
                          </p>
                          <p>Check out who's engaging with your posts.</p>
                        </div>
                      </Col>
                      <Col xs={4} className="d-flex">
                        <AiOutlineSearch size={35} className="text-muted" />
                        <div className="ml-2">
                          <p className="font-weight-bold no-p-no-m">
                            11 Search Appearances
                          </p>
                          <p>See how often you appear in search results.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="bg-light mt-3 rounded p-3">
                    <h4>About</h4>
                    <p className="text-truncate">{profileDetails.bio}</p>
                  </div>
                  <ExperiencesUser />

                  <div className="bg-light mt-3 rounded p-3">
                    <h4>Education</h4>
                    <ul class="list-group">
                      <li class="list-group-item border-bottom transparent">
                        <div className="d-flex align-items-start">
                          <div className="mr-2">
                            <img
                              src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/EPICODE-pitto-color.png"
                              className="mini-logos"
                            />
                          </div>
                          <div>
                            <p className="no-p-no-m"> Epicode</p>
                            <p className="no-p-no-m text-muted">
                              Full Stack Developer Program
                            </p>
                            <p className="no-p-no-m text-muted">
                              Sep 2022 - Mar 2023
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item border-bottom transparent">
                        {" "}
                        <div className="d-flex align-items-start">
                          <div className="mr-2">
                            <img
                              src="https://www.freeiconspng.com/thumbs/school-icon-png/high-school-icon-png-8.png"
                              className="mini-logos"
                            />
                          </div>
                          <div>
                            <p className="no-p-no-m"> High School</p>
                            <p className="no-p-no-m text-muted">
                              High School Degree
                            </p>
                            <p className="no-p-no-m text-muted">2019 - 2022</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-light mt-3 rounded p-3">
                    <h4>Skills</h4>
                    <ul class="list-group">
                      <li class="list-group-item border-bottom transparent">
                        Bootsrap
                        <Skillimage />
                      </li>
                      <li class="list-group-item border-bottom transparent">
                        JavaScript <Skillimage />
                      </li>
                      <li class="list-group-item border-bottom transparent">
                        Bootstrap <Skillimage />
                      </li>
                    </ul>
                    <Button className="btn transparent text-dark w-100">
                      Show all 15 skills
                    </Button>
                  </div>
                </Col>

                <Col xs={3} className="rounded">
                  <Row className="bg-light text-dark border solid  rounded">
                    <Col xs={12}>
                      <p className="mt-3">
                        Edit public profile & URL <AiOutlineQuestionCircle />
                      </p>
                      <hr />
                    </Col>

                    <Col xs={12}>
                      <p>
                        Add profile in another language{" "}
                        <AiOutlineQuestionCircle />
                      </p>
                    </Col>
                  </Row>
                  <Row className="bg-light text-dark border solid  rounded mt-1">
                    {" "}
                    <Col xs={12} className="ml-2">
                      <h5 className="pt-4 ">People you may know</h5>
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
                    <Col xs={11} className="ml-2 border-top">
                      <Row>
                        <Col xs={2} className="mr-3">
                          <img
                            className=" mt-3 rounded-img"
                            style={{ width: "3rem" }}
                            src={users[1]?.image}
                            alt="..."
                          />
                        </Col>
                        <Col xs={8}>
                          <h6 className="pt-4 no-p-no-m ">{users[1]?.name}</h6>
                          <p
                            className="smaller-text
text-muted text-truncate"
                          >
                            {users[1]?.bio}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={11} className="ml-2 border-top">
                      <Row>
                        <Col xs={2} className="mr-3">
                          <img
                            className=" mt-3 rounded-img"
                            style={{ width: "3rem" }}
                            src={users[2]?.image}
                            alt="..."
                          />
                        </Col>
                        <Col xs={8}>
                          <h6 className="pt-4 no-p-no-m ">{users[2]?.name}</h6>
                          <p
                            className="smaller-text
text-muted text-truncate"
                          >
                            {users[2]?.bio}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={11} className="ml-2 border-top">
                      <Row>
                        <Col xs={2} className="mr-3">
                          <img
                            className=" mt-3 rounded-img"
                            style={{ width: "3rem" }}
                            src={users[3]?.image}
                            alt="..."
                          />
                        </Col>
                        <Col xs={8}>
                          <h6 className="pt-4 no-p-no-m ">{users[3]?.name}</h6>
                          <p
                            className="smaller-text text-truncate
text-muted"
                          >
                            {users[3]?.bio}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={11} className="ml-2 border-top">
                      <Row>
                        <Col xs={2} className="mr-3">
                          <img
                            className=" mt-3 rounded-img"
                            style={{ width: "3rem" }}
                            src={users[4]?.image}
                            alt="..."
                          />
                        </Col>
                        <Col xs={8}>
                          <h6 className="pt-4 no-p-no-m ">{users[4]?.name}</h6>
                          <p
                            className="smaller-text text-truncate
text-muted"
                          >
                            {users[4]?.bio}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="bg-light text-dark border solid rounded mt-1">
                    <Col xs={12} className="ml-2">
                      <div className="pt-3">
                        <img
                          className="mr-2"
                          style={{ width: "1rem" }}
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                          alt="..."
                        />
                        <span style={{ fontSize: "0.7rem" }}>
                          L E A R N I N G
                        </span>
                        <p className="pt-2">
                          Add new skills with these courses, free for 24 hours
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} className="ml-2">
                      <Row>
                        <Col xs={2}>
                          <img
                            className="mt-1"
                            style={{ width: "4rem" }}
                            src="https://previews.123rf.com/images/stocking/stocking1501/stocking150100381/35531587-business-people-talking.jpg"
                            alt="..."
                          />
                        </Col>
                        <Col xs={10}>
                          <h6 className="ml-4 mt-1">
                            Interpersonal Communication
                          </h6>
                        </Col>
                      </Row>
                      <hr />
                    </Col>
                    <Col xs={12} className="ml-2">
                      <Row>
                        <Col xs={2}>
                          <img
                            className="mt-3"
                            style={{ width: "4rem" }}
                            src="https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=612x612&w=0&h=odO8tvEg9PAxaJqHDY-CbOq_j4YQ5qKthixyGZK3h5k="
                            alt="..."
                          />
                        </Col>
                        <Col xs={10}>
                          <h6 className="ml-4 mt-3">
                            Speaking Confidently and Effectively
                          </h6>
                        </Col>
                      </Row>
                      <hr />
                    </Col>
                    <Col xs={12} className="ml-2">
                      <Row>
                        <Col xs={2}>
                          <img
                            className="mt-3"
                            style={{ width: "4rem" }}
                            src="https://media.istockphoto.com/id/1350926687/photo/happy-business-woman-using-digital-tablet-at-home.jpg?b=1&s=170667a&w=0&k=20&c=kfOJZExzHr5_-OK3AIKHWgoD_QLKnP_kVWDQwl6ZbEY="
                            alt="..."
                          />
                        </Col>
                        <Col xs={10}>
                          <h6 className="ml-4 mt-3">
                            Developing Your Emotional Intelligence
                          </h6>
                        </Col>
                      </Row>
                      <hr />
                    </Col>

                    <Col
                      xs={12}
                      className="mb-3  mt-2 d-flex justify-content-center"
                    >
                      <h6 className="text-secondary">See my recommendations</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </header>
      </div>
    </>
  );
};
export default ProfileUser;
