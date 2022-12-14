import { gettingExpOfUsers } from "../redux/actions/actionType";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Modal, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
const Experiences = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.user.experiences);
  useEffect(() => {
    dispatch(gettingExpOfUsers());
  }, []);
  console.log(experiences);

  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => setAdd(true);
  const handleNoAdd = () => setAdd(false);
  return (
    <>
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
                      <InputGroup
                        type="text"
                        readonly
                        class="form-control-plaintext"
                        value="email@example.com"
                      >
                        <Form.Control
                          placeholder="Search"
                          value={experiences[0]?.company}
                        />
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
                        readonly
                        class="form-control-plaintext"
                        value="email@example.com"
                      >
                        <Form.Control
                          placeholder="Search"
                          value={experiences[0]?.role}
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
                        readonly
                        class="form-control-plaintext"
                        value="email@example.com"
                      >
                        <Form.Control
                          placeholder="Search"
                          value={experiences[0]?.description}
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
                        readonly
                        class="form-control-plaintext"
                        value="email@example.com"
                      >
                        <Form.Control
                          placeholder="Search"
                          value={experiences[0]?.startDate}
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
                        readonly
                        class="form-control-plaintext"
                        value="email@example.com"
                      >
                        <Form.Control
                          placeholder="Search"
                          value={experiences[0]?.updatedAt}
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
      <Modal show={add} onHide={handleAdd}>
        <Modal.Header closeButton onClick={handleNoAdd}>
          <Modal.Title>Add new experiences: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul class="list-group">
            <li class="list-group-item border-bottom transparent">
              <div className="d-flex align-items-start">
                <div>
                  <div class="form-group row mb-1">
                    <label for="staticEmail" class="col-sm-3 col-form-label">
                      Company:
                    </label>
                    <div class="col-sm-9">
                      <InputGroup
                        type="text"
                        class="form-control-plaintext"
                        value="email@example.com"
                      >
                        <Form.Control placeholder="Add company name" />
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
                        <Form.Control placeholder="Add position in company" />
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
                        <Form.Control placeholder="Small description" />
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
                        <Form.Control placeholder="Add time of work start" />
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
                        <Form.Control placeholder="Add time u ended work " />
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
            onClick={handleNoAdd}
            id="buttons-rounded"
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleNoAdd} id="buttons-rounded">
            Add
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
              <div>
                <p className="no-p-no-m">{experiences[0]?.company}</p>
                <p className="no-p-no-m text-muted">{experiences[0]?.role}</p>
                <p className="no-p-no-m text-muted text-smaller">
                  {experiences[0]?.description}
                </p>
                <p className="no-p-no-m text-muted">Sep 2022 - Now</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Experiences;
