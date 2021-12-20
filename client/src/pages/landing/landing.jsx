import "../landing/landing.scss";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { AiFillBank, AiOutlineBulb, AiOutlineCloudUpload, AiOutlineFileText } from "react-icons/ai";
import logo from "../header/Courseflow.jpeg";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Landing() {

  const [list, setList] = useState();
  const [uniList, setUniList] = useState();
  const navigate = useNavigate();

  const getNotes = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/notes`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        let noteList = [];
        data.forEach(uni => {
          uni.courses.forEach(course => {
            noteList = noteList.concat(...course.files)
          })
        });
        console.log(noteList);
        setList(noteList);
      }).catch(err => console.log(err))
  }

  const getUniversities = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/landingUni`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        let universityList = [];
        data.forEach(uni => {
          universityList.push(uni)
        });
        console.log("6666");
        console.log(universityList);
        setUniList(universityList);
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    getNotes();
    getUniversities();
  }, [])

  const goToSignup = (e) => {
    navigate("/signup")
  }

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
          { uniList ?
            (uniList.length > 0 ?
              uniList.map((item, index) => {
                return(
                  <div
                    key={index}
                  >
                    {console.log("555")}
                    {console.log(item)}
                    <button
                      onClick={goToSignup}
                      className="col-12 mb-1 btn btn-block btn-outline-success top-document"
                    >
                      <div className="row">
                        <div className="col-8">
                          <h5 className="text-start" >{item.universityName}</h5>
                        </div>
                      </div>
                      <p
                        className="text-start top-document-text"
                        key={index}
                      >
                        {item.courses[0] ?  item.courses[0].courseName : "No Course"}
                      </p>
                      <p
                        className="text-start top-document-text"
                        key={index}
                      >
                        {item.courses[1] ?  item.courses[1].courseName : "No Course"}
                      </p>
                    </button>
                  </div>

                );
              }) :<p>No course yet !!!</p>)            :
            <p>Loading...</p>

          }
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
          { list ?
            (list.length > 0 ?
              list.map((item, index) => {
                return(
                  <div
                    key={index}
                    className="mb-1"
                  >
                    <button
                      onClick={goToSignup}
                      className="col-12 btn btn-block btn-outline-success top-document"
                    >
                      <div className="row">
                        <div className="col-12">
                          <h5 className="text-start" >{item.file.name}</h5>
                        </div>
                      </div>
                      <p className="text-start top-document-text" >{item.info.courseName}</p>
                      <p className="text-start top-document-text" >{item.info.university}</p>
                    </button>
                  </div>
                );
              }) :<p>No note has been uploaded yet !!!</p>)            :
            <p>Loading...</p>
          }
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Landing;