/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import "../course/course.scss";


function Course({ code, university }) {

  const navigate = useNavigate();

  const goToCourse = (e) => {
    if(code !== "unknown" && university !== "unknown"){
      e.preventDefault();
      e.stopPropagation();
      navigate(`/courses/${university}/${code}`)
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
             
            >{code}
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
  code:PropTypes.string,
  university: PropTypes.string
}

Course.defaultProps = {
  code:"unknown",
  university: "unknown"
} 
export default Course;
