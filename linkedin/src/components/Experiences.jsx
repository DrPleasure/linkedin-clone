import { gettingExpOfUsers } from "../redux/actions/actionType";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal, InputGroup, Form, Col } from "react-bootstrap";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
const Experiences = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.user.experiences);
  useEffect(() => {
    dispatch(gettingExpOfUsers());
  }, []);

  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => setAdd(true);
  const handleNoAdd = () => setAdd(false);
  const submitChanges = async () => {
    const experienceInformation = {
      // _id: user._id,
      role: document.querySelector("#role").value,
      company: document.querySelector("#company").value,
      startDate: document.querySelector("#startDate").value,
      endDate: document.querySelector("#endDate").value,
      description: document.querySelector("#description").value,
      area: document.querySelector("#area").value,
    };
    console.log(experienceInformation);
    const options = {
      method: "POST",
      body: JSON.stringify(experienceInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}}/experiences`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("User information is updated successfully");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(gettingExpOfUsers(user._id));
    handleClose();
  };

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
                      <InputGroup type="text" class="form-control-plaintext">
                        <Form.Control placeholder={experiences[0]?.company} />
                      </InputGroup>
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
                        value="email@example.com"
                      >
                        <Form.Control placeholder={experiences[0]?.role} />
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
                        value="email@example.com"
                      >
                        <Form.Control
                          placeholder={experiences[0]?.description}
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
                      >
                        <Form.Control placeholder={experiences[0]?.startDate} />
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
                      >
                        <Form.Control placeholder={experiences[0]?.updatedAt} />
                      </InputGroup>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            id="buttons-rounded"
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} id="buttons-rounded">
            Save Changes
          </Button>
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
          <Button variant="primary" type="submit" onClick={submitChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="bg-light mt-3 rounded p-3">
        <div className="d-flex justify-content-between">
          <h4>Experiences</h4>
          <div>
            <AiOutlinePlus onClick={handleAdd} size={30} className="hover" />
            <MdOutlineModeEditOutline
              size={30}
              onClick={handleShow}
              className="hover"
            />
          </div>
        </div>
        <ul class="list-group">
          <li class="list-group-item border-bottom transparent">
            <div className="d-flex align-items-start">
              <div className="mr-2">
                <img
                  src="https://avatars.githubusercontent.com/u/6154722?s=280&v=4"
                  className="mini-logos"
                />
              </div>

              {experiences.map((experiences, i) => (
                <Col>
                  <div>
                    <p className="no-p-no-m">{experiences?.company}</p>
                    <p className="no-p-no-m text-muted">{experiences?.role}</p>
                    <p className="no-p-no-m text-muted text-smaller">
                      {experiences?.description}
                    </p>
                    <p className="no-p-no-m text-muted">Sep 2022 - Now</p>
                  </div>
                </Col>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Experiences;
