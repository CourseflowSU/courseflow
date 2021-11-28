import React from "react"
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="wrapper">

      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Collapsible Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
          <li className="active"><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li>
            <Link
              to="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
            >Pages
            </Link>
            <ul
              className="collapse list-unstyled"
              id="homeSubmenu"
            >
              <li><Link to="#">Page</Link></li>
              <li><Link to="#">Page</Link></li>
              <li><Link to="#">Page</Link></li>
            </ul>
          </li>
          <li><Link to="#">Portfolio</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>

      <div id="content">
        <button
          type="button"
          id="sidebarCollapse"
          className="navbar-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    </div>
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
