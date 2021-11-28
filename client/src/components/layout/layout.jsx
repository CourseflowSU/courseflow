import React from "react";
import Footer from "../../pages/footer/footer.jsx";
import Header from "../../pages/header/header.jsx";
import Sidebar from "../sidebar/sidebar.jsx";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          {children}
        </div>
        
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
