import "../course/course.scss";

function Course() {

  return (
    <div>
      <button className="col-12 mb-1 btn btn-block btn-outline-success course-button">
        <div className="row justify-content-between">
          <div className="col-6">
            <h4 className="text-start" >Course Name</h4>
          </div>
          <div className="col-4">
            <p className="text-end text-xsm" >Sabanci University</p>
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


      </button>
    </div>
  );
}

export default Course;
