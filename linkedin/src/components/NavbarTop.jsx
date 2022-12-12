import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import Divider from '@mui/material/Divider';


export default function NavbarTop() {
  return (
    <Navbar id='NavbarTop' expand="lg">
  <Navbar.Brand href="#"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" id="Navbarlogo"></img> </Navbar.Brand>
  <Form className="d-flex">
      <FormControl
        type="search"
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
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">My Network</Nav.Link>
      <Nav.Link href="#action2">Jobs</Nav.Link>
      <Nav.Link href="#action2">Messaging</Nav.Link>
      <Nav.Link href="#action2">Notifications</Nav.Link>
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

      <Nav.Link href="#" disabled>
        Work
      </Nav.Link>
      <p id="Premium">Try Premium for free</p>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  )
}

