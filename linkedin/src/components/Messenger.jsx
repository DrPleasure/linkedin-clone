import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SplitButton from "react-bootstrap/SplitButton";
function Messenger() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="mb-2 light text-dark">
        <DropdownButton
          id={"messaging"}
          drop={"up"}
          variant="light"
          title={<img src={user.image} className="imgmessenger" />}
          menuAlign={{ lg: "center" }}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default Messenger;
