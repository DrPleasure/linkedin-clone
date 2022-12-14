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
import Searchbar from "./Searchbar";
export default function NavbarTop() {
  useEffect(() => {
    FetchData();
  }, []);

  const headers = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4NDBhOTQwNWJkYTAwMTUwOTE4NDIiLCJpYXQiOjE2NzA5MjI0MTAsImV4cCI6MTY3MjEzMjAxMH0.kjWibFQVg-vQH3I0TIVSx-LtiW0RzfnZtZHc033cLR0",
    },
  };

  const FetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        headers
      );
      if (response.ok) {
        let data = await response.json();
        setProfiles(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const [profiles, setProfiles] = useState([]);
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
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
            <Link to="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="logo"
                id="Navbarlogo"
                style={{ width: "35px", height: "35px", objectFit: "cover" }}
              ></img>{" "}
            </Link>
          </Navbar.Brand>
          <div style={{ marginRight: "7.5rem" }}>
            <Searchbar />
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0 navbar-icon-top navbar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-center">
                <div>
                  <FaHome />
                </div>
                Home
              </Nav.Link>
              <Nav.Link className="text-center">
                <div>
                  <FaPeopleArrows />
                </div>
                My Network
              </Nav.Link>
              <Nav.Link className="text-center">
                <div>
                  <FaBriefcase />{" "}
                </div>
                Jobs
              </Nav.Link>
              <Nav.Link className="text-center">
                <div>
                  {" "}
                  <FaRocketchat />
                </div>{" "}
                Messaging
              </Nav.Link>
              <Nav.Link className="text-center">
                <div>
                  {" "}
                  <FaBell />
                </div>{" "}
                Notifications
              </Nav.Link>
              <div className="d-flex align-items-center mb-4 mr-2 ml-1">
                <div>
                  <div className="text-center">
                    <a href="/Profile/me">
                      <img id="avatar" src={user.image} />
                    </a>
                  </div>
                  <div>
                    <NavDropdown
                      title="Me"
                      id="navbarScrollingDropdown"
                      style={{
                        height: "1rem",
                        margin: "-0.3rem",
                      }}
                    >
                      <Link to="/Profile/me">
                        <NavDropdown.Item href="#action3">
                          {user?.name} {user?.surname}
                        </NavDropdown.Item>
                      </Link>
                      <NavDropdown.Item href="#action4">
                        Description
                      </NavDropdown.Item>

                      <NavDropdown.Item>View Profile</NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Account
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Settings & Privacy
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Manage
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Posts & Activity
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Sign out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
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
