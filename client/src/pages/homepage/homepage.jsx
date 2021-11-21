import { useLocation } from "react-router-dom";
import "../homepage/homepage.css";
import logo from "../homepage/logo.png";

function Homepage() {
  const location = useLocation();
  // const { currentUser } = state;
  console.log("useLocation:", location.state.user);
  const currentUser = location.state.user;
  // const {user } = params.user;

  return (
    <div>
      <div className="header-location">
        <h1>HEADER LOCATION</h1>
      </div>
      <div className="row">
        <div className="navbar-location col-3">
          <h1>NAVBAR LOCATION</h1>
        </div>
        <div className="col-8">
          <div className="row">
            <h1>
              Hi {currentUser ? currentUser.username: ""},
              Welcome to your page
            </h1>
          </div>
          <div className="row mt-4">
            <h4>My Courses</h4>
            <div className="row mt-2">
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-danger"
                >
                  CS308
                </button>
              </div>
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-danger"
                >
                  CS308
                </button>
              </div>
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-danger"
                >
                  CS308
                </button>
              </div>
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-danger"
                >
                  CS308
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <h4>Recently Viewed Documents</h4>
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
          <div className="row mt-4">
            <h4>Recently Viewed Courses</h4>
            <div className="row mt-2">
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-success"
                >
                  CS308
                </button>
              </div>
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-success"
                >
                  CS308
                </button>
              </div>
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-success"
                >
                  CS308
                </button>
              </div>
              <div className="ml-1 col-2">
                <button className="col-12 course-btn ml-1
                  btn btn-block btn-outline-success"
                >
                  CS308
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-location text-center">
        <h1>FOOTER LOCATION</h1>
      </div>
    </div>
  );
}

export default Homepage;
