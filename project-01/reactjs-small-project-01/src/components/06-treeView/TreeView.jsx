import React from "react";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="treeViewContainer">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
