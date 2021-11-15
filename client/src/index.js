import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import { StoreProvider } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
      <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

