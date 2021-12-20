/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import "../course/course.scss";
import { useEffect, useState } from "react";

function Course({ courseCode, name,  university, addToFav }) {

  const navigate = useNavigate();
  let clearCourseName = name.replace("_", " ");
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
            className="col-8 courseName"
            onClick={(e) => goToCourse(e)}
          >
            <a
              href = {`/courses/${university}/${courseCode}`}
              className="text-start course-link"
            >
              <h4>{`${name.replace("_", " ")}`}</h4>
              <h5>{`${courseCode.replace("_", " ")}`}</h5>
            </a>
          </div>
          <div className="col-4">
            <a
              href= {`/universities/${university}`}
              className="course-link"
            >
              <p className="text-end text-xsm" >{university.replace("_", " ")}</p>
            </a>
          </div>
        </div>
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
