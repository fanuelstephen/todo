import React from "react";
import "./Filter.css";
import { PiTray } from "react-icons/pi";
import { IoMdCalendar } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";
import { CiFloppyDisk } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import ToggleButton from "../toogle/ToggleButton";

function Filter({ handleToggle, isOn, handleFilterChange, isClose }) {
  const handleClick = (filter) => {
    handleFilterChange(filter);
  };
  return (
    <div
      className={`filter ${isOn ? " " : "filter_white"} ${
        isClose ? "hide" : "show"
      }`}
    >
      <div className="filter-content">
        <h4 className={`${isOn ? " " : "active"}`}>Filters</h4>
        <ToggleButton onClick={() => handleToggle()} isOn={isOn} />
      </div>
      <div className={`content ${isOn ? " " : "item_Hover"}`}>
        <ul>
          <li onClick={() => handleClick("All")}>
            <PiTray className="filter_icon" />
            All
          </li>
          <li onClick={() => handleClick("Starred")}>
            <FaStar className="filter_icon" />
            Starred
          </li>
          <li onClick={() => handleClick("Today")}>
            <IoMdCalendar className="filter_icon" />
            Today
          </li>
          <li onClick={() => handleClick("Week")}>
            <LiaCalendarWeekSolid className="filter_icon" />
            Week
          </li>
        </ul>
      </div>
      <div className="project">
        <h4 className={`${isOn ? "" : "active"}`}>Projects</h4>
        <FaPlus className="project_icon" />
      </div>
      <div className={`default ${isOn ? "" : "default2"}`}>
        <CiFloppyDisk />
        <span>Default</span>
      </div>
      <div className="github">
        <VscGithub className={`github_icon ${isOn ? "" : "github_icon-w"}`} />
      </div>
    </div>
  );
}

export default Filter;
