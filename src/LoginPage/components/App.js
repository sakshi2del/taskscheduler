//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Login from "./login";
import "./global.css";
import Forgotpassword from "./forgotpassword";
import Register from "./Register";
import Profile from "./profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/register/:role" element={<Register />} />
        {/* <Route path="/Profile/:username" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
