import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onInputChange, addTask }) => {
  return (
    <div className="task-list">
      <div className="task-list-header">
        <span className="header-checkbox">✔</span>
        <span className="header-name">Task Name</span>
        <span className="header-due-date">Due Date</span>
        <span className="header-creator">Creator</span>
        <span className="header-timestamp">Timestamp</span>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          {...task}
          onInputChange={onInputChange}
          index={index}
        />
      ))}
      <button className="add-task" onClick={addTask}>+</button>
    </div>
  );
};

export default TaskList;
