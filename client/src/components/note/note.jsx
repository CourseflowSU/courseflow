/* eslint-disable react/prop-types */
import logo from "../../pages/homepage/logo.png";
import { useStore } from "../../store/store";
import "../note/note.scss";
import { useState } from "react";

function Note({ fileName, courseName, courseCode, university }) {

  return (
    <div>
      <button className="col-12 mb-1 btn btn-block btn-success course-button">
        <div className="row justify-content-between">
          <div
            className="col-8 courseName"
          >
            <a
              href = {`/notes/${university}/${courseCode}/${fileName}`}
              className="text-start note-link"
            >
              <h4>{`${fileName.replace("_", " ")}`}</h4>
            </a>
            <a
              href= {`/courses/${university}/${courseCode}`}
              className="note-link"
            >

              <h5 className="text-start">{`${courseName.replace("_", " ")} - ${courseCode.replace("_", " ")}`}</h5>
            </a>

          </div>
          <div className="col-4">
            <a
              href= {`/universities/${university}`}
              className="note-link"
            >
              <p className="text-end text-xsm" >{university.replace("_", " ")}</p>
            </a>
          </div>
        </div>
      </button>
    </div>
    // <div>
    //   <button className="col-12 mb-1 btn btn-block btn-outline-success course-button">
    //     <div className="row justify-content-between">
    //       <div
    //         className="col-8 courseName"
    //       >
    //         <a
    //           href = {`/courses/${university}/${courseCode}`}
    //           className="text-start course-link"
    //         >
    //           <h4>{`${fileName.replace("_", " ")}`}</h4>
    //         </a>
    //       </div>
    //       <a
    //         href = {`/courses/${university}/${courseCode}`}
    //         className="link-success"
    //       >
    //         <p className="text-start" >{courseName}</p>
    //       </a>
    //       <div className="col-4">
    //         <a
    //           href= {`/universities/${university}`}
    //           className="course-link"
    //         >
    //           <p className="text-end text-xsm" >{university}</p>
    //         </a>
    //       </div>
    //     </div>
    //   </button>
    // </div>
    // <div className="col-12 mt-3 mb-3 note-button row">
    //   <button
    //     className="col-12 btn btn-block btn-outline-success top-document"
    //   >
    //     <a
    //       href = {`/notes/${university}/${courseCode}/${fileName}`}
    //       className="link-success"
    //     >
    //       <p className="text-start" >{fileName}</p>
    //     </a>
    //     <a
    //       href = {`/courses/${university}/${courseCode}`}
    //       className="link-success"
    //     >
    //       <p className="text-start" >{courseName}</p>
    //     </a>
    //     <a
    //       href= {`/universities/${university}`}
    //       className="link-success"
    //     >
    //       <p className="text-start" >{university}</p>
    //     </a>
    //   </button>
    //   <button className="col-12 btn btn-block">
    //     <div className="row">
    //       <div className="col-2">
    //         <img
    //           className="preview-border"
    //           width={"120px"}
    //           height={"120px"}
    //           src={logo}
    //           alt={"logo"}
    //         />
    //       </div>
    //       <div className="col-10 justify-content-start mb-2">
    //         <div className="row">

  //           <div className="col-8">
  //             <a
  //               href = {`/notes/${university}/${courseCode}/${fileName}`}
  //               className="link-success"
  //             >
  //               <p className="text-start" >{fileName}</p>
  //             </a>
  //             <a
  //               href = {`/courses/${university}/${courseCode}`}
  //               className="link-success"
  //             >
  //               <p className="text-start" >{courseName}</p>
  //             </a>
  //             <a
  //               href= {`/universities/${university}`}
  //               className="link-success"
  //             >
  //               <p className="text-start" >{university}</p>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </button>
  // </div>
  );
}

export default Note;