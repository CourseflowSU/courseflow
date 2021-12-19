import "../comments/comments.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import axios from "axios";
function Comments({ userName, text, points, university, courseCode }) {

  const [count, setCount] = useState(points);
  const [likeClicked, setLikeClicked] = useState(0);
  const [dislikeClicked, setDislikeClicked] = useState(0);
  const [comment, setComment] = useState({ userName: userName, text: text, points: points });
  const pointRequest = { university, courseCode, comment }

  console.log("saaa")
  console.log(university);
  console.log(courseCode);
  console.log("asss")
  const postPoint = async () => {
    console.log(pointRequest);
    await axios
      .post(`${process.env.REACT_APP_URL}/comments`, pointRequest)
      .then((res) => {
        console.log(res);
      })
  }

  const likeButton = () => {
    if(likeClicked == 0 && dislikeClicked == 0)
    {
      setCount(count + 1),
      setLikeClicked(likeClicked + 1),
      setComment(userName, text, count);
      postPoint();
    }
    else if (likeClicked == 1 && dislikeClicked == 0)
    {
      setCount(count - 1),
      setLikeClicked(likeClicked - 1),
      postPoint();
    }
    else if(likeClicked == 0 && dislikeClicked == 1)
    {
      setCount(count + 2),
      setLikeClicked(likeClicked + 1),
      setDislikeClicked(dislikeClicked - 1),
      postPoint();
    }
  }
  const disLikeButton = () => {
    if(likeClicked == 0 && dislikeClicked == 0)
    {
      setCount(count - 1),
      setDislikeClicked(dislikeClicked + 1),
      postPoint();
    }
    else if(likeClicked == 1 && dislikeClicked == 0)
    {
      setCount(count - 2),
      setLikeClicked(likeClicked - 1),
      setDislikeClicked(dislikeClicked + 1),
      postPoint();
    }
    else if(likeClicked == 0 && dislikeClicked == 1)
    {
      setCount(count + 1),
      setDislikeClicked(dislikeClicked - 1),
      postPoint();
    }
  }
  return (
    <div className="row d-flex justify-content-start align-items-start">
      <div className="col-1">
        <div className="row d-flex justify-content-center align-items-start">
          <button
            onClick={likeButton}
            className="icon-button-like btn btn-success"
          >
            <AiFillLike
              style={{
                height: "20px",
                width: "20px",
              }}
            />
          </button>
        </div>
        <div className="row">
          <h5 className="like-count-text">{count}</h5>
        </div>
        <div className="row d-flex justify-content-center align-items-start">
          <button
            onClick={disLikeButton}
            className="icon-button-like btn btn-danger"
          >
            <AiFillDislike
              style={{
                height: "20px",
                width: "20px",
              }}
            />
          </button>
        </div>
      </div>
      <div className="col-9">
        <div className="row">
          <h6 className="commenter-name" >{userName}</h6>
        </div>
        <div className="row">
          <p>{text}</p>
        </div>
      </div>
      <hr className="mt-4 comment-divider solid"></hr>
    </div>
  );
}

Comments.propTypes = {
  userName:PropTypes.string,
  text: PropTypes.string,
  points: PropTypes.number,
  university: PropTypes.string,
  courseCode: PropTypes.string
}

Comments.defaultProps = {
  userName:"unknown",
  text: "unknown",
  points: 0,
  university: "unknown",
  courseCode: "unknown"
}

export default Comments;
