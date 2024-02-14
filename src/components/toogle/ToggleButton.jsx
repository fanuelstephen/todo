import React from "react";
import "./ToggleButton.css";

function ToggleButton({ onClick, isOn }) {
  return (
    <div>
      <label className={`switch`}>
        <input type="checkbox" checked={isOn} onChange={onClick} />
        <span
          className={`slider round  ${isOn ? "switch-ON" : "switch_OFF"}`}
        ></span>
      </label>
    </div>
  );
}

export default ToggleButton;
