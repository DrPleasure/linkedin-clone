import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Divider from "@mui/material/Divider";
import {
  FaHome,
  FaPeopleArrows,
  FaBriefcase,
  FaRocketchat,
  FaBell,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import ScrollNavbar from "./ScrollNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { gettingAllUsers } from "../redux/actions/actionType";
import { gettingUsers } from "../redux/actions/actionType";
import { User } from "./User";

export default function NavbarTop() {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(gettingAllUsers());
  }, []);
  console.log(users);

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(gettingUsers());
    console.log(query);
  }, [query]);

  return (
    <div className=" sticky-top w-100 " id="navbar">
      <div className=" d-flex justify-content-center">
        <Navbar id="NavbarTop" expand="lg">
          <Navbar.Brand href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="logo"
              id="Navbarlogo"
              style={{ width: "35px", height: "35px", objectFit: "cover" }}
            ></img>{" "}
          </Navbar.Brand>
          <Form className="d-flex">
            {/* <FaSearch /> */}
            <FormControl
              type="search"
              bg="grey"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={query}
              onChange={(e) => handleChange(e)}
            />
          </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <FaHome /> Home
              </Nav.Link>
              <Nav.Link href="#action2">
                <FaPeopleArrows /> My Network
              </Nav.Link>
              <Nav.Link href="#action2">
                <FaBriefcase /> Jobs
              </Nav.Link>
              <Nav.Link href="#action2">
                <FaRocketchat /> Messaging
              </Nav.Link>
              <Nav.Link href="#action2">
                <FaBell /> Notifications
              </Nav.Link>
              <div className="d-flex align-items-center">
                <img id="avatar" src={user.image} />
                <NavDropdown title="Me" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">UserName</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Description
                  </NavDropdown.Item>

                  <Button>View Profile</Button>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Account</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Settings & Privacy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Manage</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Posts & Activity
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Sign out</NavDropdown.Item>
                </NavDropdown>
              </div>
              <Divider orientation="vertical" flexItem />
              <NavDropdown title="Work" href="#action5">
                Yeppah
              </NavDropdown>

              <Nav.Link
                id="Trypremium"
                className="navbar-item"
                href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fin%2Folafglad%2F&upsellOrderOrigin=premium_nav_upsell_text"
              >
                Try Premium for free
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <ScrollNavbar />
    </div>
  );
}
