import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../../components/comments/comments.jsx";
import Note from "../../components/note/note.jsx";

const { default: Layout } = require("../../components/layout/layout");

function SingleCourse() {
  const { university, code } = useParams()

  const [course, setCourse] = useState();

  const fetchCourse = async () => {
    console.log("fetching");
    axios
      .post(`${process.env.REACT_APP_URL}/courses/${university}/${code.split("-")[0]}`)
      .then((res) => {
        console.log(res);
        setCourse(res);
        // if (res.status === 200 && res.data.message) {
        //   setErrorMessage(res.data.message);
        // } else if (res.status === 200) {
        //   setErrorMessage("You logged in succesfully");
        //   const dbUser = res.data;
        //   console.log("login user:", dbUser);
        //   dispatch(userLogin(dbUser));
        //   navigate("/home");
        // } else {
        //   setErrorMessage("Error! Please try again.");
        // }
      })
      .catch((err) => {
        console.log("Error:", err);
        // setErrorMessage("Error! Please try again.");
      });
  }

  useEffect(() => {
    fetchCourse();
    
  }, [university, code])
  console.log(code, university);
  return (
    <Layout>
      <div className="row homepage-margin">
        <div className="col">
          <div className="row mt-4 justify-content-center">
            <h4>{code}</h4>
            {/* <div className="row mt-2">
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
            </div> */}
          </div>
          <div className="row mt-4">
            <h4>Course Notes</h4>
            <div className="row">
             
              <div className="col-12">
                {Note("Note Name", "Software Engineering", "Sabanci University")}
              </div>
              <div className="col-12">
                {Note("Note Name", "Software Engineering", "Sabanci University")}
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <h4>Comments</h4>
            <div className="row mt-2">
              <div className="row mt-2">
                <div className="col-12">
                  {Comments("keremkor228", "Lorem ipsum dolor sit amet.")}
                </div>
                <div className="col-12">
                  {Comments("keremkor228", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleCourse;
