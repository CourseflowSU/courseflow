import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store";
import "../profile/profile-page.css";
import { useNavigate } from "react-router";
import Note from "../../components/note/note.jsx";
import { useState , useEffect } from "react";


function Profile() {
  const [state] = useStore();
  const { user: currentUser } = state;
  const navigate = useNavigate();
  const [favoriteNotes, setFavoriteNotes] = useState();


  const goToChangePassword = (e) => {
    navigate("/change-password")
  }

  
  useEffect(() => {
    let arr_favoriteNotes = JSON.parse(localStorage.getItem("currentUser")).favouriteDocuments;

    if (arr_favoriteNotes) {
      setFavoriteNotes(arr_favoriteNotes);
    }

    
  }, []);


  return (
    <Layout>
      <div className="profile-info row align-items-center mr-0">
        <div className="col-2 profileImgLocation mt-2">
          <div className="text-center d-flex justify-content-center align-items-center profileImg">{currentUser.username.substring(0,2).toUpperCase()}</div>
        </div>
        <div className="col-3">
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
                      courseCode={item.courseCode}
                      university={item.university}
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

    
  );
}

export default Profile;
