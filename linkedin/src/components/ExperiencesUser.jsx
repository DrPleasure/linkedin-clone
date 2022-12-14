import { gettingExpOfUsers, getExperienceOtherAction, getUserXp } from "../redux/actions/actionType";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal, InputGroup, Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useSearchParams } from "react-router-dom"
const ExperiencesUser = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.user.otherExperience);
  
  console.log(experiences)

  const currentOtherUserId = useSelector((state) => state.user.otherUser._id);
  useEffect(() => {
    if(currentOtherUserId) {  dispatch(getUserXp(currentOtherUserId))}
  
  }, [currentOtherUserId]);
  console.log(currentOtherUserId)



  const experiencesforuser = useSelector((state) => state.user.otherUser);
  
  console.log(experiencesforuser)

  const profileDetails = useSelector((state) => state.user.otherUser);
  console.log(profileDetails);


const expid = user._id
console.log(expid)
  



  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [fuck, setFuck] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => setAdd(true);
  const handleNoAdd = () => setAdd(false);
 
  const somefunction = (experiences) => {
    setFuck(experiences);
    handleShow();
    console.log(fuck);
  };
  //--------------------------------------------------------------------------------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //------------------
  return (
    <>
      {/*First modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Experiences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul class="list-group">
            <li class="list-group-item border-bottom transparent">
              <div className="d-flex align-items-start">
                <div className="mr-2">
                  <img
                    src="https://avatars.githubusercontent.com/u/6154722?s=280&v=4"
                    className="mini-logos"
                  />
                </div>
                <div>
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Company:
                    </label>
                    <div class="col-sm-9">
                      <Form.Group
                        type="text"
                        class="form-control-plaintext"
                        controlId="company2"
                      >
                        <Form.Control
                          placeholder={experiences?.company}
                          defaultValue={fuck.company}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Position:
                    </label>
                    <div class="col-sm-9">
                      <InputGroup
                        type="text"
                        class="form-control-plaintext"
                        id="role2"
                      >
                        <Form.Control
                          placeholder={experiences?.role}
                          defaultValue={fuck.role}
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Description:
                    </label>
                    <div class="col-sm-9">
                      <InputGroup
                        type="text"
                        class="form-control-plaintext"
                        defaultValue={fuck.description}
                        id="description2"
                      >
                        <Form.Control
                          placeholder={experiences?.description}
                          defaultValue={fuck.description}
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Start:
                    </label>
                    <div class="col-sm-9">
                      <InputGroup
                        type="text"
                        class="form-control-plaintext"
                        value="email@example.com"
                        id="startDate2"
                      >
                        <Form.Control
                          placeholder={experiences?.startDate}
                          defaultValue={fuck.startDate}
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      End:
                    </label>
                    <div class="col-sm-9">
                      <InputGroup
                        type="text"
                        class="form-control-plaintext"
                        value="email@example.com"
                        id="endDate2"
                      >
                        <Form.Control
                          placeholder={experiences?.updatedAt}
                          defaultValue={fuck.updatedAt}
                        />
                      </InputGroup>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
      

         
        </Modal.Footer>
      </Modal>
      {/* 2nd Modal */}
      <i className="bi bi-plus-lg " onClick={handleShow}></i>

      <Modal show={add} onHide={handleNoAdd}>
        <Modal.Header>
          <Modal.Title>Add Personal Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="required">* Required field</p>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role*</Form.Label>
              <Form.Control type="text" placeholder="Enter Role" />
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company*</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
            <Form.Group controlId="area">
              <Form.Label>Area*</Form.Label>
              <Form.Control type="text" placeholder="Enter City of Work" />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date*</Form.Label>
              <Form.Control type="date" placeholder="Enter your new position" />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your city of residence"
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Job Experience"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNoAdd}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




      <div className="bg-light mt-3 rounded p-3">
        <div className="d-flex justify-content-between">
          <h4>Experiences</h4>
          <div>
            <AiOutlinePlus onClick={handleAdd} size={30} className="hover" />
          </div>
        </div>
        <ul class="list-group">
          <li class="list-group-item border-bottom transparent">
            <div className="d-flex align-items-start">
              <Row xs={1}>
                {experiences.map((experiences, i) => (
                  <Col className="m-1 border d-flex rounded justify-content-between">
                    <div>
                      <p className="no-p-no-m ">{experiences?.company}</p>
                      <p className="no-p-no-m text-muted  w-25">
                        {experiences?.role}
                      </p>
                      <p className="no-p-no-m text-muted text-smaller">
                        {experiences?.description}
                      </p>
                      <div className="d-flex" id="dates">
                        <p className="no-p-no-m text-muted  text-truncate">
                          {experiences?.startDate}
                        </p>
                        <p className="no-p-no-m text-muted text-truncate">
                          {" "}
                          {experiences?.endDate}
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineModeEditOutline
                        size={30}
                        onClick={() => somefunction(experiences)}
                        className="hover mt-2"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ExperiencesUser;
