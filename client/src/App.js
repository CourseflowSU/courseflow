import React from "react";
import './App.css';
import Login from './pages/login/login';
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Signup from './pages/signup/signup';
import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route exact
                path="/"
                component={Homepage}
          />
          <Route 
                path="login"
                component={Login}
          />
          <Route exact
                path="/signup"
                component={Signup}
          />
        </Routes>
      </React.Suspense>
    </div>
  );

}

export default App;
