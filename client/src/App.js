import React from "react";
import { Navigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/error-page/error-page.jsx";
import Homepage from "./pages/homepage/homepage.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import { useStore } from "./store/store";

function App() {
  const [state] = useStore();
  const { user: currentUser } = state;

  return (
    <React.Suspense fallback={<div>Loading...</div>} >
      <Routes>
        {!currentUser ?
          <>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="*"
              element={<Login />}
            />
          </> :
          <>
            <Route
              path="/home"
              element={<Homepage />}
            />
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="/login"
              element={<Navigate to="/home"/>}
            />
            <Route
              path="/signup"
              element={<Navigate to="/home"/>}
            />
            <Route
              path="*"
              element={<ErrorPage />}
            />
          </>
        }
      </Routes>
    </React.Suspense>
  );
}

export default App;
