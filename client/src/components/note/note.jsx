/* eslint-disable react/prop-types */
import logo from "../../pages/homepage/logo.png";
import { useStore } from "../../store/store";
import "../note/note.css";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";

function Note({ fileName, courseName, courseCode, university }) {

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
                  className="link-success"
                >
                  <p className="text-start" >{fileName}</p>
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
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Note;