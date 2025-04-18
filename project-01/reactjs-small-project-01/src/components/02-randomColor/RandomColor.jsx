import React, { useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [bgcolor, setbgColor] = useState("#124536");

  function getRandomValue(num) {
    return Math.floor(Math.random() * num);
  }

  function generateHex() {
    const hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    const HEX_LENGTH = hexValues.length;

    for (let i = 0; i < 6; ++i) {
      hexColor += hexValues[getRandomValue(HEX_LENGTH)];
    }
    setbgColor(hexColor);
  }

  function generateRGB() {
    const [r, g, b] = [
      getRandomValue(255),
      getRandomValue(255),
      getRandomValue(255),
    ];
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    setbgColor(rgbColor);
  }

  function someFunc() {
    if (colorType === "hex") generateHex();
    else generateRGB();
  }

  return (
    <div
      className="container"
      style={{
        background: bgcolor,
      }}
    >
      <button onClick={someFunc}>Generate Random Color</button>
      <button onClick={() => setColorType("hex")}>create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>create RGB Color</button>

      <div>
        <h2>{colorType === "hex" ? "HEX Color" : "RGB Color"}</h2>
        <h2>{bgcolor}</h2>
      </div>
    </div>
  );
};

export default RandomColor;
