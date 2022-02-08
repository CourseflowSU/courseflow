import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Course from "../../components/course/course.jsx";
import Layout from "../../components/layout/layout.jsx";
import Note from "../../components/note/note.jsx";
import { useStore } from "../../store/store";
import "../homepage/homepage.css";



function Homepage() {
  const [state] = useStore();
  const { user: currentUser } = state;

  const [list, setList] = useState();
  const [recentNotesList, setRecentNotesList] = useState();
  const [recentCoursesList, setRecentCoursesList] = useState();


  useEffect(() => {
    let recentNotes = localStorage.getItem("recentNotes");

    if (recentNotes) {
      setRecentNotesList(JSON.parse(recentNotes));
    }

    let recentCourses = localStorage.getItem("recentCourses");

    if (recentCourses) {
      setRecentCoursesList(JSON.parse(recentCourses));
    }
  }, []);

  useEffect(() => {
    let favCoursesList = currentUser.favouriteCourses;

    if (favCoursesList) {
      setList(favCoursesList);
    }

  }, []);

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
                      <div className="col-10 col-lg-6">
                        <Course
                          courseCode={item.courseCode}
                          university={item.university}
                          name={item.courseName}
                        >
                        </Course>
                      </div>
                    </div>
                  );
                }) :<p>No course yet !!!</p>)            :
              <p>Loading...</p>

            }
          </div>
        </div>
        <div className="row mt-4">
          <h4>Recently Viewed Notes</h4>

          <div className="row">
            { recentNotesList ?
              recentNotesList.map((item, index) => {
                return(
                  <div
                    key={index}
                    className="row mt-4"
                  >
                    <div className="col-10 col-lg-6">
                      <Note
                        courseCode={item.info.courseCode}
                        university={item.info.university}
                        courseName={item.info.courseName}
                        fileName={item.fileName}
                      >
                      </Note>
                    </div>
                  </div>
                );
              }) :<p>No note has been viewed yet !!!</p>
            }
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <h4>Recently Viewed Courses</h4>
          { recentCoursesList ?
            <div className="row mt-2">
              <div className="row mt-2">
                <div className="col-10 col-lg-6">
                  {recentCoursesList[0] ?
                    <Course
                      courseCode={recentCoursesList[0].courseCode}
                      university={recentCoursesList[0].university}
                      name={recentCoursesList[0].name}
                    >
                    </Course>  : ""
                  }
                </div>
                <div className="col-10 col-lg-6">
                  {recentCoursesList[1] ?
                    <Course
                      courseCode={recentCoursesList[1].courseCode}
                      university={recentCoursesList[1].university}
                      name={recentCoursesList[1].name}
                    >
                    </Course> : ""
                  }
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-10 col-lg-6">
                  {recentCoursesList[2] ?
                    <Course
                      courseCode={recentCoursesList[2].courseCode}
                      university={recentCoursesList[2].university}
                      name={recentCoursesList[2].name}
                    >
                    </Course> : ""
                  }
                </div>
                <div className="col-10 col-lg-6">
                  {recentCoursesList[3] ?
                    <Course
                      courseCode={recentCoursesList[3].courseCode}
                      university={recentCoursesList[3].university}
                      name={recentCoursesList[3].name}
                    >
                    </Course>   : ""
                  }
                </div>
              </div>
            </div>  : <p>No note has been viewed yet !!!</p>
          }
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
