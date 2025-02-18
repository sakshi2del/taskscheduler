import React from "react";
import "./Body.css";
import task from "../assets/images/task.png";

const Body = () => {
  return (
    <div className="body-container">
      <div className="content">
        <h1 className="main-heading">TASK SCHEDULER</h1>
        <p className="description">
          Task ScheduER helps you efficiently plan, manage, and track your daily tasks with ease. Stay organized and boost productivity with our smart scheduling features.
        </p>
        <button className="start-button">Start Scheduling <span className="arrow">→</span></button>
      </div>
      <img src={task} alt="Task Scheduling" className="body-image" />
    </div>
  );
};

export default Body;
