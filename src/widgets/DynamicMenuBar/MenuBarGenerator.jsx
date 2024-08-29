// src/widgets/MenuBarGenerator.jsx
import React, { useEffect } from "react";
import MenuBarTemplate from "./MenuBarTemplate";
import { useMenuBar } from "./MenuBarContext";

const MenuBarGenerator = (Component, defaultMenuData) => {
  return (props) => {
    const { menuData, updateMenuBar } = useMenuBar();

    // Initialize the menu bar with default data only if it's empty
    useEffect(() => {
      if (menuData.length === 0) {
        updateMenuBar(defaultMenuData);
      }
    }, [defaultMenuData, menuData, updateMenuBar]);

    return (
      <div>
        <MenuBarTemplate items={menuData} />
        <Component {...props} />
      </div>
    );
  };
};

export default MenuBarGenerator;
