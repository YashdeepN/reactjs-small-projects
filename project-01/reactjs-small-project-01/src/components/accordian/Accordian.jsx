import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((d) => (
            <div className="item" key={d.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(d.id)}
              >
                <p>{d.question}</p>
                <p>+</p>
              </div>
              {selected === d.id ? <div>{d.answer}</div> : null}
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
