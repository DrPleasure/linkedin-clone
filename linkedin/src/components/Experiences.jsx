import { gettingExpOfUsers } from "../redux/actions/actionType";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal, InputGroup, Form, Col, Row } from "react-bootstrap";
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
  const [fuck, setFuck] = useState({});
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
      const endpoint = `https://striveschool-api.herokuapp.com/api/profile/639840a9405bda0015091842/experiences`;
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
  const somefunction = (experiences) => {
    setFuck(experiences);
    handleShow();
    console.log(fuck);
  };
  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  const deleteExperience = async () => {
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
      const endpoint = `https://striveschool-api.herokuapp.com/api/profile/639840a9405bda0015091842/experiences/${fuck._id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Exp deleted successfully, you fuck");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(gettingExpOfUsers(user._id));
  };
  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  const updateExperience = async () => {
    const experienceInformation2 = {
      // _id: user._id,
      role: document.querySelector("#role2").value,
      company: document.querySelector("#company2").value,
      startDate: document.querySelector("#startDate2").value,
      endDate: document.querySelector("#endDate2").value,
      description: document.querySelector("#description2").value,
    };
    console.log(experienceInformation2);
    const options = {
      method: "PUT",
      body: JSON.stringify(experienceInformation2),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/profile/639840a9405bda0015091842/experiences/${fuck._id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Exp edited successfully, you cock");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(gettingExpOfUsers(user._id));
  };
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
                        type="date"
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
                        type="date"
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
          <Button
            variant="danger"
            onClick={deleteExperience}
            id="buttons-rounded"
          >
            Delete
          </Button>

          <Button
            variant="primary"
            onClick={updateExperience}
            id="buttons-rounded"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 2nd Modal */}
      <i className="bi bi-plus-lg " onClick={handleShow}></i>

      <Modal show={add} onHide={handleNoAdd}>
        <Modal.Header>
          <Modal.Title>New Experience: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter Role" />
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
            <Form.Group controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" placeholder="Enter City of Work" />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
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
              <Form.Label>Description</Form.Label>
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
          </div>
        </div>
        <ul class="list-group">
          <li class="list-group-item border-bottom transparent">
            <div className="d-flex align-items-start">
              <Row xs={1}>
                {experiences.map((experiences, i) => (
                  <Col
                    className="m-1 mt-2 border d-flex rounded justify-content-between "
                    style={{ width: "30vw" }}
                  >
                    <div>
                      <h4 className="no-p-no-m ">{experiences?.company}</h4>
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
export default Experiences;
