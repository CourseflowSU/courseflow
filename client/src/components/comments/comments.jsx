import "../comments/comments.css";
import { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

function Comments(name, text) {
  const [count, setCount] = useState(0);
  const [likeClicked, setLikeClicked] = useState(0);
  const [dislikeClicked, setDislikeClicked] = useState(0);
  const likeButton = () => {
    if(likeClicked == 0 && dislikeClicked == 0)
    {
      setCount(count + 1),
      setLikeClicked(likeClicked + 1)
    }
    else if (likeClicked == 1 && dislikeClicked == 0)
    {
      setCount(count - 1),
      setLikeClicked(likeClicked - 1)
    }
    else if(likeClicked == 0 && dislikeClicked == 1)
    {
      setCount(count + 2),
      setLikeClicked(likeClicked + 1),
      setDislikeClicked(dislikeClicked - 1)
    }
  }
  const disLikeButton = () => {
    if(likeClicked == 0 && dislikeClicked == 0)
    {
      setCount(count - 1),
      setDislikeClicked(dislikeClicked + 1)
    }
    else if(likeClicked == 1 && dislikeClicked == 0)
    {
      setCount(count - 2),
      setLikeClicked(likeClicked - 1),
      setDislikeClicked(dislikeClicked + 1)
    }
    else if(likeClicked == 0 && dislikeClicked == 1)
    {
      setCount(count + 1),
      setDislikeClicked(dislikeClicked - 1)
    }
  }
  return (
    <div className="row d-flex justify-content-center align-items-start">
      <div className="col-1 offset-1">
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
          <h6 className="commenter-name" >{name}</h6>
        </div>
        <div className="row">
          <p>{text}</p>
        </div>
      </div>
      <hr className="mt-4 comment-divider solid"></hr>
    </div>
  );
}

export default Comments;
