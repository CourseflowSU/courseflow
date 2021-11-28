import React from "react";
import { AiFillFolder, AiOutlineCloudUpload, AiOutlineFieldTime, AiOutlineFileWord, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <>
      <nav
        id="sidebar"
      >

        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/">
              <span>
                <AiOutlineHome />
              </span>
          Home
            </Link>
          </li>
          <li>
           
            <Link to="/courses">
              <span>
                <AiFillFolder />
              </span>
               Courses
            </Link>
            
            
          </li>
          <li>
            <Link to="/notes"> 
              <span>
                <AiOutlineFileWord />
              </span>
          Notes
            </Link>
          </li>
          <li>
            <Link to="/recent-documents">
              <span>
                <AiOutlineFieldTime />
              </span>
            Recent Documents
            </Link>
          </li>
          <li>
            <Link to="/file-upload">
              <span>
                <AiOutlineCloudUpload />
              </span>  
              Upload
            </Link>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Sidebar;
