import "../landing/landing.scss";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { AiFillBank, AiOutlineBulb, AiOutlineCloudUpload, AiOutlineFileText } from "react-icons/ai";
import logo from "../header/Courseflow.jpeg";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.jsx";

function Landing() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        style={{ position: "sticky" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
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
            <Nav.Link
              href="/login"
              align="end"
              className="loginBtn mr-3"
            >
              <span
                className="uploadBtnText"
              >

            Sign-In
              </span>
            </Nav.Link>
            <Nav.Link
              href="/signup"
              align="end"
              className="uploadBtn"
            >
              <span
                className="uploadBtnText"
              >

            Sign-Up
              </span>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="landing-search-container justify-content-center align-items-center">
        <h1>Find the Best Notes for your Studies</h1>
        <div className="input-group landing-input">
          <input
            type="text"
            className="form-control"
            placeholder="Search for courses"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn uploadBtn"
              type="button"
            >
              <AiOutlineBulb
                style={{
                  height: "25px",
                  width: "25px",
                  marginLeft: "0px",
                  marginRight: "2px",
                  color: "white",
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-2 col-4 mt-3">
          <span
            className="top-info-text"
          >
            <AiFillBank
              style={{
                height: "25px",
                width: "25px",
                marginLeft: "-2px",
                marginRight: "8px",
              }}
            />
            Top Universities
          </span>
          <hr></hr>
          <button className="col-12 mb-1 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >University Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
          </button>
          <button className="col-12 mb-1 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >University Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
          </button>
          <button className="col-12 mb-1 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >University Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
          </button>
          <button className="col-12 mb-5 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >University Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
          </button>
        </div>
        <div className="col-4 mt-3">
          <span
            className="top-info-text"
          >
            <AiOutlineFileText
              style={{
                height: "25px",
                width: "25px",
                marginLeft: "-2px",
                marginRight: "8px",
              }}
            />
            Top Documents
          </span>
          <hr></hr>
          <button className="col-12 mb-1 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >Note Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Sabanci University</p>
          </button>
          <button className="col-12 mb-1 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >Note Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Sabanci University</p>
          </button>
          <button className="col-12 mb-1 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >Note Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Sabanci University</p>
          </button>
          <button className="col-12 mb-5 btn btn-block btn-outline-success top-document">
            <div className="row">
              <div className="col-8">
                <h5 className="text-start" >Note Name</h5>
              </div>
            </div>
            <p className="text-start top-document-text" >Software Engineering (CS308)</p>
            <p className="text-start top-document-text" >Sabanci University</p>
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Landing;