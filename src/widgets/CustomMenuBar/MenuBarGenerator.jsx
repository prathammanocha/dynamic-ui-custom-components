// src/widgets/MenuBarGenerator.jsx
import React from "react";
import MenuBarTemplate from "./MenuBarTemplate";

const MenuBarGenerator = (Component, menuData) => {
  return (props) => (
    <div>
      <MenuBarTemplate items={menuData} />
      <Component {...props} />
    </div>
  );
};

export default MenuBarGenerator;
