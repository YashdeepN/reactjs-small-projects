import React from "react";
import MenuList from "./MenuList";

import "./treeVies.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="treeViewContainer">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
