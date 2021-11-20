import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";

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
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Error! There&apos;s nothing here!</p>
            </main>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
