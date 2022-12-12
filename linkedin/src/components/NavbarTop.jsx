import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import Divider from "@mui/material/Divider";
import {
  FaSearch,
  FaHome,
  FaPeopleArrows,
  FaBriefcase,
  FaRocketchat,
  FaBell,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

export default function NavbarTop() {
  const premiumurl =
    "https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F";

  return (
    <Container>
      <Navbar id="NavbarTop" expand="lg" sticky="top">
        <Navbar.Brand href="#">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="logo"
            id="Navbarlogo"
          ></img>{" "}
        </Navbar.Brand>
        <Form className="d-flex">
          <FaSearch />
          <FormControl
            type="search"
            bg="grey"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            disabled
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
            <CgProfile />
            <NavDropdown title="Me" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">UserName</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Description</NavDropdown.Item>

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
            <Divider orientation="vertical" flexItem />
            <NavDropdown title="Work" href="#action5">
              Yeppah
            </NavDropdown>

            <Nav.Link
              id="Trypremium"
              className="navbar-item"
              activeClassName="is-active"
              href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fin%2Folafglad%2F&upsellOrderOrigin=premium_nav_upsell_text"
            >
              Try Premium for free
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
