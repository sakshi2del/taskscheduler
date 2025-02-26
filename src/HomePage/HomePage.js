import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const addTask = async () => {
    const newTask = {
      TaskId: tasks.length + 1,
      Title: "",
      DueDate: "",
      CreatedBy: "",
      CreatedAt: new Date().toLocaleString(),
      completed: false,
    };

    try {
      const response = await axios.post(
        "https://localhost:7284/api/Task",
        newTask
      );
      if (response.status === 201) {
        setTasks([...tasks, newTask]);
      } else {
        console.error("Failed to add task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TaskList
          tasks={tasks}
          onInputChange={handleInputChange}
          addTask={addTask}
        />
      </main>
    </div>
  );
};

export default HomePage;
