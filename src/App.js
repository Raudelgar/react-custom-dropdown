import React, { useState, useEffect } from "react";
import "./styles.scss";
import Dropdown from "./Dropdown.js";

const mockData = [
  { value: "api/v1/payment", label: "payments information" },
  { value: "api/v1/abc", label: "abc" },
  { value: "api/v1/def", label: "def" },
  { value: "api/v1/xyz", label: "xyz" }
];

export default function App() {
  const [option, setOption] = useState("");

  useEffect(() => {
    console.log(option);
  }, [option]);

  const handleOption = value => {
    setOption(value);
  };

  return (
    <div className="App">
      <h1>React Custom Dropdown</h1>
      <Dropdown options={mockData} handleOptions={handleOption} />
    </div>
  );
}
