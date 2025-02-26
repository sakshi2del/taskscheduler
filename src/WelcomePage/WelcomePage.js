// src/WelcomePage/App.js
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Link } from "react-router-dom";
import "./styles.css";
function WelcomePage() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default WelcomePage;
