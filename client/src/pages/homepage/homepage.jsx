import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store";
import "../homepage/homepage.css";
import logo from "../homepage/logo.png";
import Course from "../../components/course/course.jsx";

function Homepage() {
  const [state] = useStore();
  const { user: currentUser } = state;

  return (
    <Layout>
      <div className="row homepage-margin">
        <div className="col">
          <div className="row mt-4">
            <h4>My Courses</h4>
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
