import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store";
import "../homepage/homepage.css";
import logo from "../homepage/logo.png";
import Course from "../../components/course/course.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";


function Homepage() {
  const [state] = useStore();
  const { user: currentUser } = state;

  const [list, setList] = useState(currentUser.favouriteCourses);

  const navigate = useNavigate();

  const goToCourse = (e) => {
    if(courseCode !== "unknown" && university !== "unknown"){
      e.preventDefault();
      e.stopPropagation();
      navigate(`/courses/${university}/${courseCode}`)
    }

  }

  return (
    <Layout>
      <div className="row homepage-margin">
        <div className="col">
          <div className="row mt-4">
            <h4>My Courses</h4>
            <div className="row mt-2">
              { list ?
                (list.length > 0 ?
                  list.map((item) => {

                    return(
                      <div
                        key={item.courseCode}
                        className="row mb-3"
                      >
                        <button
                          className = "col-6 btn btn-block btn-outline-success course-button"
                        >
                          <div className="row justify-content-between">
                            <div
                              className="col-8 courseName"
                            >
                              <a
                                href = {`/courses/${item.university}/${item.courseCode}`}
                                className="text-start course-link"
                              >
                                <h4>{`${item.courseName} - ${item.courseCode}`}</h4>
                              </a>
                            </div>
                            <div className="col-4">
                              <a
                                href= {`/universities/${item.university}`}
                                className="course-link"
                              >
                                <p className="text-end text-xsm" >{item.university}</p>
                              </a>
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  }) :<p>No course yet !!!</p>)            :
                <p>Loading...</p>

              }
            </div>
          </div>
          <div className="row mt-4">
            <h4>Favourite Documents</h4>
            <div className="row">
              <div className="col-2">
                <button className="preview-button">
                  <div className="preview-container">
                    <img
                      className="img-thumbnail preview-border"
                      src={logo}
                      alt={"logo"}
                    />
                  </div>
                </button>
              </div>
              <div className="col-2">
                <button className="preview-button">
                  <div className="preview-container">
                    <img
                      className="img-thumbnail preview-border"
                      src={logo}
                      alt={"logo"}
                    />
                  </div>
                </button>
              </div>
              <div className="col-2">
                <button className="preview-button">
                  <div className="preview-container">
                    <img
                      className="img-thumbnail preview-border"
                      src={logo}
                      alt={"logo"}
                    />
                  </div>
                </button>
              </div>
              <div className="col-2">
                <button className="preview-button">
                  <div className="preview-container">
                    <img
                      className="img-thumbnail preview-border"
                      src={logo}
                      alt={"logo"}
                    />
                  </div>
                </button>
              </div>
              <div className="col-2">
                <button className="preview-button">
                  <div className="preview-container">
                    <img
                      className="img-thumbnail preview-border"
                      src={logo}
                      alt={"logo"}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <h4>Recently Viewed Courses</h4>
            <div className="row mt-2">
              <div className="row mt-2">
                <div className="col-6">
                  <Course />
                </div>
                <div className="col-6">
                  <Course />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <Course />
                </div>
                <div className="col-6">
                  <Course />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
