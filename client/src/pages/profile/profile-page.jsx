import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store";
import "../profile/profile-page.css";
import { useNavigate } from "react-router";
import Note from "../../components/note/note.jsx";
import Course from "../../components/course/course.jsx";
import axios from "axios";
import { useState , useEffect, useCallback } from "react";


function Profile() {
  const [state] = useStore();
  const { user: currentUser } = state;
  const navigate = useNavigate();
  const [favoriteNotes, setFavoriteNotes] = useState();
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const goToChangePassword = (e) => {
    navigate("/change-password")
  }

  // const fetchCourse = useCallback(
  //   async (university, courseCode) => {
  //     console.log("fetching");
  //     await axios
  //       .post(`${process.env.REACT_APP_URL}/courses/${university}/${courseCode}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         if(res.data !== null){
  //           console.log(res.data.courseName);
  //           setCourse((oldArray) => oldArray.push(res.data.courseName))
  //         }
  //         console.log("course", course[0]);
  //       })
  //       .catch((err) => {
  //         console.log("Error:", err);
  //         // setErrorMessage("Error! Please try again.");
  //       });
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [],
  // )



  useEffect(() => {
    let arr_favoriteNotes = JSON.parse(localStorage.getItem("currentUser")).favouriteDocuments;
    console.log(arr_favoriteNotes);
    if (arr_favoriteNotes) {
      setFavoriteNotes(arr_favoriteNotes);
    }

    let arr_favoriteCourses = JSON.parse(localStorage.getItem("currentUser")).favouriteCourses;
    console.log(arr_favoriteCourses);
    if (arr_favoriteCourses) {
      setFavoriteCourses(arr_favoriteCourses);
    }

    // for (let i = 0; i < arr_favoriteNotes.length; i++) {
    //   fetchCourse(arr_favoriteNotes[i].university, arr_favoriteNotes[i].courseCode);
    // }

  }, []);


  return (
    <Layout>
      <div className="profile-info row align-items-center mr-0">
        <div className="col-2 profileImgLocation mt-2">
          <div className="text-center d-flex justify-content-center align-items-center profileImg">{currentUser.username.substring(0,2).toUpperCase()}</div>
        </div>
        <div className="col-4">
          <div className="mt-3" >
            <p>
              Username: {currentUser ? currentUser.username: ""}
            </p>
            <p>
              E-mail: {currentUser ? currentUser.email: ""}
            </p>
            <p>
              University: {currentUser ? currentUser.university: ""}
            </p>
          </div>
        </div>
        <div className="col-2 offset-3 mt-0">
          <button
            onClick = {goToChangePassword}
            className="col-12 btn btn-block btn-danger"
          >
            Change Password
          </button>
        </div>
      </div>
      <hr className="profile-page-divider mx-5 solid"></hr>

      <div className="row m-4">
        <h4>Favorite Courses</h4>
        <div className="row mt-2">
          { favoriteCourses ?
            (favoriteCourses.length > 0 ?
              favoriteCourses.map((item, index) => {
                return(
                  <div
                    key={index}
                    className="row mt-4"
                  >
                    <Course
                      courseCode={item.courseCode}
                      university={item.university}
                      name={item.courseName}
                    >
                    </Course>
                  </div>
                );
              }) :<p>No note has been uploaded yet !!!</p>)            :
            <p>Loading...</p>
          }
        </div>
      </div>
      <hr className="profile-page-divider mx-5 solid"></hr>


      <div className="row m-4">
        <h4>Favorite Notes</h4>
        <div className="row mt-2">
          { favoriteNotes ?
            (favoriteNotes.length > 0 ?
              favoriteNotes.map((item, index) => {
                return(
                  <div
                    key={index}
                    className="row mt-4"
                  >
                    <Note
                      fileName={item.fileName}
                      courseName={item.courseCode}
                      courseCode={item.courseCode}
                      university={item.university}
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


  );
}

export default Profile;
