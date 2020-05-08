import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Dropdown.scss";

export default function Dropdown({ options, handleOptions }) {
  const [select, setSelect] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropLabel, setDropLabel] = useState({
    text: "choose option",
    init: true,
    style: "dropdown-label"
  });

  const handleDropDown = () => {
    setToggle(!toggle);
    setDropLabel(curr => ({
      ...curr,
      init: false
    }));
  };

  const updateOption = (value, label) => {
    setSelect(label);
    handleOptions(value);
  };

  return (
    <div className="dropdown" onClick={handleDropDown}>
      <button className="dropwdown-btn-label">
        <span className={`${!dropLabel.init ? dropLabel.style : ""}`}>
          {dropLabel.text}
        </span>
        <span className="select">{select}</span>
      </button>
      <button className="dropdown-btn-circle">
        <span className="dropdown-circle">
          <IoMdArrowDropdown className="dropdown-arrow" />
        </span>
      </button>
      {toggle && (
        <ul className="dropdown-content" onMouseLeave={() => setToggle(false)}>
          {options.map(({ value, label }) => (
            <li
              key={label}
              className="dropdown-item"
              onClick={() => updateOption(value, label)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
