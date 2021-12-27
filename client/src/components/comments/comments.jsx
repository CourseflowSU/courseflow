import "../comments/comments.css";
import { useState , useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import axios from "axios";
function Comments({ userName, text, points, university, courseCode }) {

  const [count, setCount] = useState(points);
  const [likeClicked, setLikeClicked] = useState(0);
  const [dislikeClicked, setDislikeClicked] = useState(0);

  const postPoint = async () => {

    const comment = { userName: userName, text: text, points: count }
    const pointRequest = { university, courseCode, comment }
    console.log(comment);
    console.log(count);
    await axios
      .post(`${process.env.REACT_APP_URL}/comments/update`, pointRequest)
      .then((res) => {
        console.log(res);
      })
  }
  useEffect(() => {
    postPoint();
  }, [count])

  const likeButton = () => {
    if(likeClicked == 0 && dislikeClicked == 0)
    {
      setCount(oldCount => oldCount + 1);
      setLikeClicked(likeClicked + 1);
    }
    else if (likeClicked == 1 && dislikeClicked == 0)
    {
      setCount(oldCount => oldCount - 1);
      setLikeClicked(likeClicked - 1);
    }
    else if(likeClicked == 0 && dislikeClicked == 1)
    {
      setCount(oldCount => oldCount + 2);
      setLikeClicked(likeClicked + 1);
      setDislikeClicked(dislikeClicked - 1);
    }
  }
  const disLikeButton = () => {
    if(likeClicked == 0 && dislikeClicked == 0)
    {
      setCount(oldCount => oldCount - 1);
      setDislikeClicked(dislikeClicked + 1);

    }
    else if(likeClicked == 1 && dislikeClicked == 0)
    {
      setCount(oldCount => oldCount - 2);
      setLikeClicked(likeClicked - 1);
      setDislikeClicked(dislikeClicked + 1);
      postPoint();
    }
    else if(likeClicked == 0 && dislikeClicked == 1)
    {
      setCount(oldCount => oldCount + 1);
      setDislikeClicked(dislikeClicked - 1);
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
