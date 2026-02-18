import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Nav } from "./components/nav/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Nav></Nav>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
