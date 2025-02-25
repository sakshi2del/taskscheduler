import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./Task.css";
const Task = ({
  Title,
  DueDate,
  CreatedBy,
  completed,
  CreatedAt,
  onInputChange,
  index,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={`task-container ${index % 2 === 0 ? "even" : "odd"}`}>
      <div className={`task ${dropdownVisible ? "task-expanded" : ""}`}>
        <div className="task-header">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) =>
              onInputChange(index, "completed", e.target.checked)
            }
            className="task-checkbox"
          />
          <input
            type="text"
            value={Title}
            onChange={(e) => onInputChange(index, "Title", e.target.value)}
            placeholder="Task Name"
            className="task-name"
          />
          <input
            type="date"
            value={DueDate}
            onChange={(e) => onInputChange(index, "DueDate", e.target.value)}
            className="task-due-date"
          />
          <input
            type="text"
            value={CreatedBy}
            onChange={(e) => onInputChange(index, "CreatedBy", e.target.value)}
            placeholder="Creator"
            className="task-creator"
          />
          <div className="timestamp-container">
            <p className="task-timestamp">
              {new Date(CreatedAt).toLocaleTimeString()}
            </p>
          </div>
          <FaCaretDown
            onClick={toggleDropdown}
            className={`caret-icon ${
              index % 2 === 0 ? "even-caret" : "odd-caret"
            }`}
          />
        </div>
        {dropdownVisible && (
          <div className="task-dropdown">
            <input
              type="text"
              placeholder="Viewer Name"
              className="viewer-name"
            />
            <textarea placeholder="Comments" className="comments"></textarea>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
