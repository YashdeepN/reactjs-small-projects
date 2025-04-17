import React, { useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#124536");

  function someFunc() {}

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <button onClick={() => someFunc}>Generate Random Color</button>
      <button onClick={() => setType("hex")}>create HEX Color</button>
      <button onClick={() => setType("rgb")}>create RGB Color</button>
    </div>
  );
};

export default RandomColor;
