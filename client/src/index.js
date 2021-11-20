import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider 
        initialState={initialState}
        reducer={userReducer}
      >
      <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root"),
);

