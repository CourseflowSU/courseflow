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
/* eslint-disable */
//   return (
//     <div class="wrapper">
//     <nav id="sidebar">
//         <div class="sidebar-header">
//             <h3>Bootstrap Sidebar</h3>
//         </div>

//         <ul class="list-unstyled components">
//             <p>Dummy Heading</p>
//             <li class="active">
//                 <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
//                 <ul class="collapse list-unstyled" id="homeSubmenu">
//                     <li>
//                         <a href="#">Home 1</a>
//                     </li>
//                     <li>
//                         <a href="#">Home 2</a>
//                     </li>
//                     <li>
//                         <a href="#">Home 3</a>
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#">About</a>
//             </li>
//             <li>
//                 <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
//                 <ul class="collapse list-unstyled" id="pageSubmenu">
//                     <li>
//                         <a href="#">Page 1</a>
//                     </li>
//                     <li>
//                         <a href="#">Page 2</a>
//                     </li>
//                     <li>
//                         <a href="#">Page 3</a>
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#">Portfolio</a>
//             </li>
//             <li>
//                 <a href="#">Contact</a>
//             </li>
//         </ul>
//     </nav>

// </div>
//   )
}

export default Sidebar
