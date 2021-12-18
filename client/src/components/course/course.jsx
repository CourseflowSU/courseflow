/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import "../course/course.scss";


function Course({ courseCode, name,  university, addToFav }) {

  const navigate = useNavigate();

  const goToCourse = (e) => {
    if(courseCode !== "unknown" && university !== "unknown"){
      e.preventDefault();
      e.stopPropagation();
      navigate(`/courses/${university}/${courseCode}`)
    }

  }

  return (
    <div>
      <button className="col-12 mb-1 btn btn-block btn-outline-success course-button">
        <div className="row justify-content-between">
          <div
            className="col-6 courseName"
            onClick={(e) => goToCourse(e)}
          >
            <h4
              className="text-start"

            >{`${name} - ${courseCode}`}
            </h4>
          </div>
          <div className="col-4">
            <p className="text-end text-xsm" >{university}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <a
              href="#1"
              className="course-link"
            >
              <p className="text-start course-note-text">Software Engineering (CS308)</p>
            </a>
          </div>
          <div className="col-6">
            <a
              href="#1"
              className="course-link"
            >
              <p className="text-start course-note-text">Software Engineering (CS308)</p>
            </a>
          </div>

        </div>
              
        {/* <div className="row mt-4">
          <div
            className="col-6" 
            onClick={addToFav}
          >
            <p
              className="text-start course-note-text"
            >Add to Favourites
            </p>
          </div>
        </div> */}
        {/*
        <div className="row">
          <div className="col-6">
            <a
              href="#1"
              className="course-link"
            >
              <p className="text-start course-note-text">Software Engineering (CS308)</p>
            </a>
          </div>
          <div className="col-6">
            <a
              href="#1"
              className="course-link"
            >
              <p className="text-start course-note-text">Software Engineering (CS308)</p>
            </a>
          </div>

        </div> */}


      </button>
    </div>
  );
}



Course.propTypes = {
  courseCode:PropTypes.string,
  name: PropTypes.string,
  university: PropTypes.string,
  addToFav:PropTypes.func
}

Course.defaultProps = {
  courseCode:"unknown",
  name: "unknown",
  university: "unknown",
  addToFav: () => any,
}
export default Course;
