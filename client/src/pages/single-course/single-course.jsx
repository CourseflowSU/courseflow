import { useParams } from "react-router";
import Comments from "../../components/comments/comments.jsx";
import Note from "../../components/note/note.jsx";
import { useState } from "react";
import axios from "axios";

const { default: Layout } = require("../../components/layout/layout");

function SingleCourse() {
  const [comment, setComment] = useState({ userName: "kerem", text: "deneme deneme deneme deneme deneme", points: 5 });
  const { university, courseCode } = useParams()
  const request = { university, courseCode, comment };

  console.log(courseCode, university);

  const postComment = async () => {
    await axios
      .post(`${process.env.REACT_APP_URL}/comments`, request)
      .then((res) => {
        console.log(res);
      })
  }

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
