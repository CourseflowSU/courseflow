import logo from "../homepage/logo.png";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import { useStore } from "../../store/store";
import { Link } from "react-router-dom";
import "../notes/notes.css";

function Notes() {
  const [state] = useStore();
  const { user: currentUser } = state;

  return (
    <div>
      <Header/>
      <div className="col-10 mt-3 mb-3 note-button offset-1 row">
        <button className="col-12 btn btn-block">
          <div className="row">
            <div className="col-2">
              <img
                className="preview-border"
                width={"120px"}
                height={"120px"}
                src={logo}
                alt={"logo"}
              />
            </div>
            <div className="col-10 justify-content-start mb-2">
              <div className="row">
                <div className="col-8">
                  <h5 className="text-start" >Note Name</h5>
                </div>
                <div className="col-4">

                  <a
                    href="#1"
                    type="button"
                    className="icon-button"
                  >
                    <i className="bi bi-arrow-up">5</i>
                  </a>
                </div>
              </div>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Software Engineering (CS308)</p>
              </a>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Sabanci University</p>
              </a>
            </div>
          </div>
        </button>
      </div>
      <div className="col-10 mt-3 mb-3 note-button offset-1 row">
        <button className="col-12 btn btn-block">
          <div className="row">
            <div className="col-2">
              <img
                className="preview-border"
                width={"120px"}
                height={"120px"}
                src={logo}
                alt={"logo"}
              />
            </div>
            <div className="col-10 justify-content-start mb-2">
              <div className="row">
                <div className="col-8">
                  <h5 className="text-start" >Note Name</h5>
                </div>
                <div className="col-4">

                  <a
                    href="#1"
                    type="button"
                    className="icon-button"
                  >
                    <i className="bi bi-arrow-up">5</i>
                  </a>
                </div>
              </div>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Software Engineering (CS308)</p>
              </a>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Sabanci University</p>
              </a>
            </div>
          </div>
        </button>
      </div>
      <div className="col-10 mt-3 mb-3 note-button offset-1 row">
        <button className="col-12 btn btn-block">
          <div className="row">
            <div className="col-2">
              <img
                className="preview-border"
                width={"120px"}
                height={"120px"}
                src={logo}
                alt={"logo"}
              />
            </div>
            <div className="col-10 justify-content-start mb-2">
              <div className="row">
                <div className="col-8">
                  <h5 className="text-start" >Note Name</h5>
                </div>
                <div className="col-4">

                  <a
                    href="#1"
                    type="button"
                    className="icon-button"
                  >
                    <i className="bi bi-arrow-up">5</i>
                  </a>
                </div>
              </div>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Software Engineering (CS308)</p>
              </a>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Sabanci University</p>
              </a>
            </div>
          </div>
        </button>
      </div>
      <div className="col-10 mt-3 mb-3 note-button offset-1 row">
        <button className="col-12 btn btn-block">
          <div className="row">
            <div className="col-2">
              <img
                className="preview-border"
                width={"120px"}
                height={"120px"}
                src={logo}
                alt={"logo"}
              />
            </div>
            <div className="col-10 justify-content-start mb-2">
              <div className="row">
                <div className="col-8">
                  <h5 className="text-start" >Note Name</h5>
                </div>
                <div className="col-4">

                  <a
                    href="#1"
                    type="button"
                    className="icon-button"
                  >
                    <i className="bi bi-arrow-up">5</i>
                  </a>
                </div>
              </div>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Software Engineering (CS308)</p>
              </a>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Sabanci University</p>
              </a>
            </div>
          </div>
        </button>
      </div>
      <div className="col-10 mt-3 mb-3 note-button offset-1 row">
        <button className="col-12 btn btn-block">
          <div className="row">
            <div className="col-2">
              <img
                className="preview-border"
                width={"120px"}
                height={"120px"}
                src={logo}
                alt={"logo"}
              />
            </div>
            <div className="col-10 justify-content-start mb-2">
              <div className="row">
                <div className="col-8">
                  <h5 className="text-start" >Note Name</h5>
                </div>
                <div className="col-4">

                  <a
                    href="#1"
                    type="button"
                    className="icon-button"
                  >
                    <i className="bi bi-arrow-up">5</i>
                  </a>
                </div>
              </div>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Software Engineering (CS308)</p>
              </a>
              <a
                href="#deneme"
                className="link-success"
              >
                <p className="text-start" >Sabanci University</p>
              </a>
            </div>
          </div>
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Notes;