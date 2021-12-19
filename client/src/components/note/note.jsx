/* eslint-disable react/prop-types */
import logo from "../../pages/homepage/logo.png";
import { useStore } from "../../store/store";
import "../note/note.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";

function Note({ fileName, courseName, courseCode, university }) {
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
    <div className="col-12 mt-3 mb-3 note-button row">
      <button className="col-12 btn btn-block">
        <div className="row">
          <div className="col-2">
            <img
              className="preview-border"
              width={"120px"}
              height={"120px"}
              src={logo}
              alt={"logo"}
            />
          </div>
          <div className="col-10 justify-content-start mb-2">
            <div className="row">
              <div className="col-8">
                <a
                  href = {`/notes/${university}/${courseCode}/${fileName}`}
                  className="text-start"
                >{fileName}
                </a>
                <a
                  href = {`/courses/${university}/${courseCode}`}
                  className="link-success"
                >
                  <p className="text-start" >{courseName}</p>
                </a>
                <a
                  href= {`/universities/${university}`}
                  className="link-success"
                >
                  <p className="text-start" >{university}</p>
                </a>
              </div>
              <div className="col-4">
                <div className="col-12">
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
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Note;