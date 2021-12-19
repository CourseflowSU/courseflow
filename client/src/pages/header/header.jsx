import React, { useCallback, useState } from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./header.css";
import { useStore } from "../../store/store";
import { userLogout } from "../../store/userReducer";
import { useNavigate } from "react-router-dom";
import logo from "../header/Courseflow.jpeg";

const Header = () => {
  const [state, dispatch] = useStore();
  const navigate = useNavigate();
  const { user: currentUser } = state;
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const onSubmit = useCallback((data) => {
    dispatch(userLogout());
    navigate("/landing");
  }, [dispatch, navigate]);



  async function handleSearch() {
    navigate("/universitySearch", { state: { id: 1,  searchQuery: searchQuery } });
  }

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      style={{ position: "sticky" }}
    >
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            className="company-logo"
            width={"160px"}
            height={"70px"}
            src={logo}
            alt={"logo"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>

          <div
            className="search-bar"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="svg-search-bar"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              >
              </path>
            </svg>
            <form
              className="search-bar-form"
              onSubmit={handleSearch}
            >
              <input
                type="search"
                placeholder="Search for courses, books or documents"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                data-hj-whitelist="true"
                spellCheck="true"
                className="search-bar-input"
              />
             
              <button
                type="submit"
                className="search-bar-button"
              >
                  Search
              </button>
            </form>
          </div>

          <Nav.Link
            href="/upload"
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
            title={<span className="profileBackground">{currentUser.username.substring(0, 2).toUpperCase()}</span>}
            align="end"
            id="navbarScrollingDropdown"
            className="navbarDropdownRight"
          >
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Item
              onClick={onSubmit}
            >
              Sign out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
