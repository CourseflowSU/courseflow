import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./header.css";
const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      style={{ position: "sticky" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">Courseflow</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          <Nav.Link
            href="#"
            align="end"
            className="uploadBtn"
          >
            <span
              className="uploadBtnText"
            >
              <AiOutlineCloudUpload
                style={{
                  height: "25px",
                  width: "25px",
                  marginLeft: "-2px",
                  marginRight: "8px",
                }}
              />
            Upload
            </span>
          </Nav.Link>
          <NavDropdown
            title={<span className="profileBackground">MT</span>}
            align="end"
            id="navbarScrollingDropdown"
            className="navbarDropdownRight"
          >
            <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Sign out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
