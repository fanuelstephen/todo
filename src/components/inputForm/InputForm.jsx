import React, { useState } from "react";
import "./InputForm.css";
import { FaStar } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";

function InputForm({ onClick, addTask, isOn }) {
  const [taskData, setTaskData] = useState({
    title: "",
    note: "",
    project: "",
    date: "",
    starred: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStarToggle = () => {
    setTaskData((prevData) => ({
      ...prevData,
      starred: !prevData.starred,
    }));
  };

  const handleAddButtonClick = () => {
    addTask(taskData);
    console.log(taskData);
    // Clear the form after adding the task
    setTaskData({
      title: "",
      note: "",
      project: "",
      date: "",
      starred: false,
    });
  };

  return (
    <form>
      <div className={`form_content ${isOn ? "" : "form_content-white"}`}>
        <div className="form_heading">
          <h4 className={`${isOn ? "" : "active"}`}>Add Task</h4>
          <input
            className={`${isOn ? "" : "input_bg"}`}
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form_note">
          <h4 className={`${isOn ? "" : "active"}`}>Note</h4>
          <textarea
            className={`${isOn ? "" : "input_bg"}`}
            rows="4"
            cols="50"
            name="note"
            value={taskData.note}
            onChange={handleInputChange}
            placeholder="Type here..."
          ></textarea>
        </div>
        <div className="form_info">
          <div>
            <h4 className={`${isOn ? "" : "active"}`}>Project</h4>
            <input
              className={`${isOn ? "" : "input_bg"}`}
              type="text"
              name="project"
              value={taskData.project}
              onChange={handleInputChange}
            />
          </div>
          <div className="calendar">
            <h4 className={`${isOn ? "" : "active"}`}>Date</h4>
            <input
              className={`${isOn ? "" : "input_bg"}`}
              type="date"
              name="date"
              value={taskData.date}
              onChange={handleInputChange}
            />
          </div>
          <div
            className={`star_icon ${isOn ? "" : "star_icon_w"}`}
            onClick={handleStarToggle}
          >
            <FaStar
              className={`input_icon ${taskData.starred ? "starred" : ""}`}
            />
          </div>
        </div>
        <div className="addButton">
          <div className={`go_back `} onClick={onClick}>
            <MdArrowBackIosNew
              className={`btn_icon ${isOn ? "" : "btn_icon-w"}`}
            />
          </div>
          <button
            className={`addBtn ${isOn ? "" : "baddBtntn-w"}`}
            type="button"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputForm;
