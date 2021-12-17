import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Comments from "../../components/comments/comments.jsx";

const { default: Layout } = require("../../components/layout/layout");

function SingleCourse() {

  const { university, courseCode } = useParams()

  const [course, setCourse] = useState();

  const [comment, setComment] = useState({ userName: "kerem", text: "deneme deneme deneme deneme deneme", points: 5 });
  const request = { university, courseCode, comment };
  const navigate = useNavigate()

  const postComment = async () => {
    await axios
      .post(`${process.env.REACT_APP_URL}/comments`, request)
      .then((res) => {
        console.log(res);
      })
  }

  const fetchCourse = useCallback(
    async () => {
      console.log("fetching");
      await axios
        .post(`${process.env.REACT_APP_URL}/courses/${university}/${courseCode}`)
        .then((res) => {
          console.log(res);
          if(res.data !== null){
            setCourse(res.data)
            console.log(res.data)
          }
          else{
            navigate("/error");
          }
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
    },
    [university, courseCode, navigate],
  )

  useEffect(() => {
    fetchCourse();
    
  }, [fetchCourse])


  return (
    <Layout>
      <div className="row homepage-margin">
        <div className="col">
          <div className="row mt-4 justify-content-center">
            <h4>{courseCode}</h4>
            <button onClick={postComment} > BAS LAN BAN</button>
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
            {course ?
              course.files.map((file,index) => {
                return (
                  <div
                    key={index}
                    className="row"
                  >
                  
                    <p>{file.info.courseName}</p>

                    {/* <div className="col-12">
                      {Note("Note Name", "Software Engineering", "Sabanci University")}
                    </div>
                    <div className="col-12">
                      {Note("Note Name", "Software Engineering", "Sabanci University")}
                    </div> */}
                  </div>
                );
              })              :
              <p>No file found for this course</p>
            }
            <div className="row">

              {/* <div className="col-12">
                {Note("Note Name", "Software Engineering", "Sabanci University")}
              </div>
              <div className="col-12">
                {Note("Note Name", "Software Engineering", "Sabanci University")}
              </div> */}
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <h4>Comments</h4>
            <div className="row mt-2">
              <Comments
                userName="keremkor228"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              >
              </Comments>
              <div className="col-12">
                <Comments
                  userName={comment.userName}
                  text={comment.text}
                  points={comment.points}
                >
                </Comments>
                {console.log(comment.points)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleCourse;
