import React, { useState } from "react";
import "./App.css";
import Filter from "./components/filters/Filter";
import Task from "./components/tasks/Task";
import InputForm from "./components/inputForm/InputForm";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function App() {
  const [isOn, setIsOn] = useState(true); // changing background
  const [isFormVisible, setIsFormVisible] = useState(false); // making form and filter visible
  const [selectedFilter, setSelectedFilter] = useState("All"); // State to store the selected filter
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [isClose, setisClose] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
    document.body.style.backgroundColor = isOn ? " #e5f0fb" : "";
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { name: newTask.title, category: "All" }];
    setTasks(updatedTasks);
    // setTasks([...tasks, newTask]);
    toggleFormVisibility();
  };
  const handleCLickIcon = () => {
    setisClose(!isClose);
  };

  return (
    <div className="container">
      <div className="container_heading">
        <h3 className={`${isOn ? "" : "h4color"}`}>
          to<span>do.</span>
        </h3>
        {isClose ? (
          <HiOutlineMenuAlt4 className="menu_icon" onClick={handleCLickIcon} />
        ) : (
          <IoMdClose className="menu_icon" onClick={handleCLickIcon} />
        )}
      </div>

      <div className="row">
        <Filter
          handleToggle={handleToggle}
          isOn={isOn}
          isClose={isClose}
          handleFilterChange={handleFilterChange}
        />
        {isFormVisible ? (
          <InputForm
            onClick={toggleFormVisibility}
            addTask={addTask}
            isOn={isOn}
          />
        ) : (
            <Task
            isClose={isClose}
            isOn={isOn}
            tasks={tasks}
            onClick={toggleFormVisibility}
            selectedFilter={selectedFilter}
          />
        )}
      </div>
    </div>
  );
}

export default App;
