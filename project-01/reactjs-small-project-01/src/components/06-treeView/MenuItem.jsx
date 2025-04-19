import React, { useState } from "react";
import MenuList from "./MenuList";

import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(label) {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
    console.log(displayChildren);
  }

  return (
    <li>
      <div className="menuItem">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayChildren[item.label] ? (
              <FaMinus size={25} color="#fff" />
            ) : (
              <FaPlus size={25} color="#fff" />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
