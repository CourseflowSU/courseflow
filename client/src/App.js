import React from "react";
import { Navigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChangePassword from "./pages/change-password/change-password.jsx";
import CourseComment from "./pages/course-comment/course-comment.jsx";
import Courses from "./pages/courses/courses.jsx";
import ErrorPage from "./pages/error-page/error-page.jsx";
import ForgotPassword from "./pages/forgotpassword/forgotpassword.jsx";
import ResetPassword from "./pages/forgotpassword/resetpassword.jsx";
import Homepage from "./pages/homepage/homepage.jsx";
import Landing from "./pages/landing/landing.jsx";
import Login from "./pages/login/login.jsx";
import Notes from "./pages/notes/notes.jsx";
import Profile from "./pages/profile/profile-page.jsx";
import Signup from "./pages/signup/signup.jsx";
import University from "./pages/university/university-page.jsx";
import Upload from "./pages/upload/upload.jsx";
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
              path="/landing"
              element={<Landing />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="*"
              element={<Landing />}
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
          </> :
          <>
            <Route
              path="/home"
              element={<Homepage />}
            />
            <Route
              path="/coursecomments"
              element={<CourseComment />}
            />
            <Route
              path="/university"
              element={<University />}
            />
            <Route
              exact
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="/upload"
              element={<Upload/>}
            />
            <Route
              path="/notes"
              element={<Notes />}
            />
            <Route
              path="/courses"
              element={<Courses />}
            />
            <Route
              path="/change-password"
              element={<ChangePassword />}
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
