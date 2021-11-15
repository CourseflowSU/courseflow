import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import ForgotPassword from './pages/forgotpassword/forgotpassword';
import ResetPassword from "./pages/forgotpassword/resetpassword";
function App() {
  return (
   
      <React.Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route 
              path="/"
              element={<Login />}
          />
          <Route 
              path="/login"
              element={<Login />}
        />
          <Route 
              path="/signup"
              element={<Signup />}
          />
          <Route 
              exact
              path="/home"
              element={<Homepage />}
          />
          <Route 
              exact
              path="/forgotpassword"
              element={<ForgotPassword />}
          />
          <Route
            exact
            path="/reset/:token"
            element={<ResetPassword />}
            component={ResetPassword}
            />
          <Route
           path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Error! There's nothing here!</p>
              </main>
           }
    />
        </Routes>
      </React.Suspense>
  );

}

export default App;
