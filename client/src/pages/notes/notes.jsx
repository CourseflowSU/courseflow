import { useStore } from "../../store/store";
import "../notes/notes.css";
import Note from "../../components/note/note.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/layout/layout.jsx";

function Notes() {

  const [list, setList] = useState();

  const getNotes = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/notes`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        let noteList = [];
        data.forEach(uni => {
          uni.courses.forEach(course => {
            noteList = noteList.concat(...course.files)
          })
        });
        console.log(noteList);
        setList(noteList);
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    getNotes();
  }, [])

  const [state] = useStore();
  const { user: currentUser } = state;
  return (
    <div>
      <Layout>
        <div className="row m-4">
          <div className="row mt-2">
            { list ?
              (list.length > 0 ?
                list.map((item, index) => {
                  return(
                    <div
                      key={index}
                      className="row mt-4"
                    >
                      <Note
                        courseCode={item.info.courseCode}
                        university={item.info.university}
                        courseName={item.info.courseName}
                        fileName={item.file.name}
                      >
                      </Note>
                    </div>
                  );
                }) :<p>No note has been uploaded yet !!!</p>)            :
              <p>Loading...</p>
            }
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Notes;