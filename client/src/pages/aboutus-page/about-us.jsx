import "./about-us.css";
import Mert from "../../assets/mert.jpg";
import Layout from "../../components/layout/layout.jsx";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { AiFillBank, AiOutlineBulb, AiOutlineCloudUpload, AiOutlineFileText } from "react-icons/ai";
import logo from "../header/Courseflow.jpeg";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import bookImg from "../../assets/aboutUs.jpeg";
import { IoMdSchool } from "react-icons/io";
function AboutUs() {
  return (
    <div>
      <Header/>
      <div className="about-info align-items-center">
        <div className="about-headInfo">
          <h2 className="h2_about">Our  
            <span className="appearContentColor appearContentFont"> mission
              {/* <span className="appearContent1 appearContent2">mandatory documents</span> */}
            </span> is to help students from different universities to get the course materials whenever they want.
          </h2>
          <img
            src={bookImg}
            alt="Happy student using Courseflow"
            className="aboutUsImg"
          >
          </img>
        </div>
      </div>
      <div className="site_contents">
        <div className="row mt-1 aboutUs_contents">
          <div className="col-4">
            <IoMdSchool
              className="site_contents_icon"
              style={{ color: "#0088d7" }}
            />
            <p
              weight="bold"
              style={{ margin: "0 0 10px", color: "#0088d7" }}
            >Courses
            </p>
            <p className="site_contents_p">Not only view or download the best study materials, you can also compare thousands of courses.</p>
          </div>
          <div className="col-4">
            <IoMdSchool
              className="site_contents_icon"
              style={{ color: "#b987ce" }}
            />
            <p
              weight="bold"
              style={{ margin: "0 0 10px", color: "#b987ce" }}
            >Notes
            </p>
            <p className="site_contents_p">Millions of study documents have been shared by students and are accessible to everyone in the world.</p>
          </div>
          <div className="col-4">
            <IoMdSchool
              className="site_contents_icon"
              style={{ color: "#fabf26" }}
            />
            <p
              weight="bold"
              style={{ margin: "0 0 10px", color: "#fabf26" }}
            >Exams
            </p>
            <p className="site_contents_p">Not only the course notes and syllabuses, also the exams are shared in the Courseflow.</p>
          </div>
        </div>
      </div>


      <div styles={{ padding: "30px 0" }}>
        <div className="founder">
          <h2 className="founder_h2"> Founders </h2>
          <div className="founder_contents">
            <div className="row mt-1 ">
              <div className="col-4 founder_contents_in founder_contents_box">
                <img
                  className="founder_img" 
                  src={Mert}
                  alt="imageFounder"
                >
                </img>
                <p className="founder_name">Mert Türe</p>
                <p className="founder_pos">Software Engineer</p>
                <p className="founder_info">Currently studying Computer Science and interested in Algoritmic solutions and Backend Engineering.</p>
              </div>
              <div className="col-4 founder_contents_in founder_contents_box">
                <img
                  className="founder_img" 
                  src={Mert}
                  alt="imageFounder"
                >
                </img>
                <p className="founder_name">Mizbah Çelik</p>
                <p className="founder_pos">Software Engineer</p>
                <p className="founder_info">Please Fill It Mizbahcım</p>
              </div>
              <div className="col-4 founder_contents_in founder_contents_box">
                <img
                  className="founder_img" 
                  src={Mert}
                  alt="imageFounder"
                >
                </img>
                <p className="founder_name">Kerem Kör</p>
                <p className="founder_pos">Software Engineer</p>
                <p className="founder_info">Please Fill It Keremcim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;