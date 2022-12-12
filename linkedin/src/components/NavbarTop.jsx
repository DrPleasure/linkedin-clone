import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import Divider from '@mui/material/Divider';
import { FaSearch,  FaHome, FaPeopleArrows, FaBriefcase, FaRocketchat, FaBell } from "react-icons/fa"
import { CgProfile} from "react-icons/cg"


export default function NavbarTop() {
  return (
    <Navbar id='NavbarTop' expand="lg">
  <Navbar.Brand href="#"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" id="Navbarlogo"></img> </Navbar.Brand>
  <Form className="d-flex">
  <FaSearch/>
      <FormControl
    
        type="search"
        bg="grey"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
    </Form>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">
      <FaHome/> Home</Nav.Link>
      <Nav.Link href="#action2">
        <FaPeopleArrows/> My Network</Nav.Link>
      <Nav.Link href="#action2">
        <FaBriefcase/> Jobs</Nav.Link>
      <Nav.Link href="#action2">
        <FaRocketchat/> Messaging</Nav.Link>
      <Nav.Link href="#action2">
        <FaBell/> Notifications</Nav.Link>
        <CgProfile/>
      <NavDropdown title="Me" id="navbarScrollingDropdown">
       
        <NavDropdown.Item href="#action3">UserName</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Description</NavDropdown.Item>
        
        <Button>View Profile</Button>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Account</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Settings & Privacy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Manage</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Posts & Activity</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Sign out</NavDropdown.Item>
        

      </NavDropdown>
      <Divider orientation="vertical" flexItem />
      <NavDropdown title="Work" href="#action5">Yeppah</NavDropdown>
      <p id="Premium">Try Premium for free</p>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  )
}

