import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  //   const [selected, setSelected] = useState(null);

  const [showSingle, setShowSingle] = useState(false);

  const [selectedArr, setSelectedArr] = useState([]);

  function toggleMode() {
    setShowSingle(!showSingle);
  }

  function handleSingleSelection(id) {
    // setSelected(id === selected ? null : id);
    if (selectedArr.includes(id)) {
      setSelectedArr([]);
    } else {
      setSelectedArr([id]);
    }
  }

  function handleMultiSelection(id) {
    if (selectedArr.includes(id)) {
      const newSelectedArr = selectedArr.filter((e) => e !== id);
      setSelectedArr([...newSelectedArr]);
    } else {
      if (selectedArr.length > 0) {
        setSelectedArr([...selectedArr, id]);
      } else {
        setSelectedArr([id]);
      }
      //   setSelectedArr(selectedArr.length > 0 ? [...selectedArr, id] : [id]);
    }
    console.log(selectedArr);
  }

  return (
    <div className="wrapper">
      <button onClick={toggleMode}>Switch</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((d) => (
            <div className="item" key={d.id}>
              <div className="title">
                <p>{d.question}</p>
                <p
                  className="expandBtn"
                  onClick={
                    showSingle
                      ? () => handleSingleSelection(d.id)
                      : () => handleMultiSelection(d.id)
                  }
                >
                  {/* {selected === d.id ? "–" : "+"} */}+
                </p>
              </div>
              {/* {selected === d.id ? <div>{d.answer}</div> : null} */}
              {selectedArr.includes(d.id) ? <div>{d.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
