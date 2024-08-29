// src/contexts/MenuBarContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create a Context
const MenuBarContext = createContext();

// Custom Hook to use the MenuBar context
export const useMenuBar = () => useContext(MenuBarContext);

// Provider Component
export const MenuBarProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);

  // Function to dynamically add or modify menu items
  const updateMenuBar = (newMenuData) => {
    setMenuData(newMenuData);
  };

  return (
    <MenuBarContext.Provider value={{ menuData, updateMenuBar }}>
      {children}
    </MenuBarContext.Provider>
  );
};
