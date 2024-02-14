import React from "react";
import "./Task.css";
import { GoCircle } from "react-icons/go";
import { FaStar } from "react-icons/fa";

function Task({ isOn, onClick, selectedFilter, tasks, isClose }) {
  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "All" || selectedFilter === "") {
      return true; // Show all tasks if the filter is "All" or empty
    } else {
      return task.category === selectedFilter; // Otherwise, filter tasks by category
    }
  });
  return (
    <div className={`task ${isOn ? "" : "task2-w"}${isClose ? "show" : ""}`}>
      <div className={`content ${isOn ? "" : "active"}`}>
        <h4>Tasks</h4>
        <div className={`task_content ${isOn ? "" : "task_content-w"}`}>
          {filteredTasks.length === 0 ? (
            <p>No tasks found, Please add one</p>
          ) : (
            filteredTasks.map((taskData, index) => (
              <div
                key={index}
                className={`cicle_task ${isOn ? "" : "cicle_task-bgw"}`}
              >
                <GoCircle
                  className={`circle_icon ${isOn ? "" : "circle_icon-w"}`}
                />
                <div>
                  <span>{taskData.name}</span>
                </div>
                <FaStar
                  className={`start_icon ${isOn ? "" : "start_icon-w"}`}
                />
              </div>
            ))
          )}
        </div>
        <div className="btn_container">
          <button className={`btn ${isOn ? "" : "btn-w"}`} onClick={onClick}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
