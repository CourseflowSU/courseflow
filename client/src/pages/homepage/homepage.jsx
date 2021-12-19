import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store";
import "../homepage/homepage.css";
import logo from "../homepage/logo.png";
import Course from "../../components/course/course.jsx";
import Note from "../../components/note/note.jsx";
import { useState, useEffect } from "react";


function Homepage() {
  const [state] = useStore();
  const { user: currentUser } = state;

  const [list, setList] = useState(currentUser.favouriteCourses);
  const [recentNotesList, setRecentNotesList] = useState();

  useEffect(() => {
    let recentNotes = localStorage.getItem("recentNotes");

    if (recentNotes) {
      setRecentNotesList(JSON.parse(recentNotes));
    }
  }, []);

  console.log(recentNotesList);
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
                        className="row mt-4"
                      >
                        <div
                          className="col-12"
                        >
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
                      <Note
                        courseCode={item.info.courseCode}
                        university={item.info.university}
                        courseName={item.info.courseName}
                        fileName={item.fileName}
                      >
                      </Note>
                    </div>
                  );
                }) :<p>No note has been viewed yet !!!</p>
              }
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
