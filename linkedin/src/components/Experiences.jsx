import { gettingExpOfUsers } from "../redux/actions/actionType";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

const Experiences = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.user.experiences);
  useEffect(() => {
    dispatch(gettingExpOfUsers());
  }, []);
  console.log(experiences);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

      <div className="bg-light mt-3 rounded p-3">
        <div className="d-flex justify-content-between">
          <h4>Experiences</h4>
          <MdOutlineModeEditOutline
            size={30}
            onClick={handleShow}
            className="hover"
          />
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
