import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import { useStore } from "./store/store";

function App() {

  const [state] = useStore();
  const {user:currentUser} = state;

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
        </>
          :
          <>
          <Route 
              exact
              path="/home"
              element={<Homepage />}
          />
          <Route 
              path="/"
              element={<Homepage />}
          />
           <Route
           path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Error! There's nothing here!</p>
              </main>
           }
            />
          </>
          }
         
        </Routes>
      </React.Suspense>
  );

}

export default App;
