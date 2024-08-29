// src/App.jsx
import React from "react";
import { MenuBarProvider, useMenuBar } from "./widgets/DynamicMenuBar/MenuBarContext";
import MenuBarGenerator from "./widgets/DynamicMenuBar/MenuBarGenerator";

const AppComponent = () => {
  const { updateMenuBar } = useMenuBar();

  const handleUpdateMenuBar = () => {
    const newMenuData = [
      {
        label: "File",
        menuItems: [
          { label: "New Tab", action: () => alert("New Tab") },
          { label: "Open", action: () => alert("Open File") },
        ],
      },
      {
        label: "Edit",
        menuItems: [
          { label: "Undo", action: () => alert("Undo") },
          { label: "Redo", action: () => alert("Redo") },
        ],
      },
      {
        label: "View",
        menuItems: [
          { label: "Reload", action: () => alert("Reload") },
          { label: "Toggle Fullscreen", action: () => alert("Toggle Fullscreen") },
        ],
      },
    ];
    updateMenuBar(newMenuData);
  };

  return (
    <div>
      <h1>Welcome to the Main Application</h1>
      <button onClick={handleUpdateMenuBar}>Update Menu Bar</button>
    </div>
  );
};

const defaultMenuData = [
  {
    label: "File",
    menuItems: [
      { label: "New Tab", action: () => alert("New Tab") },
      { label: "New Window", action: () => alert("New Window") },
    ],
  },
  {
    label: "Edit",
    menuItems: [
      { label: "Undo", action: () => alert("Undo") },
      { label: "Redo", action: () => alert("Redo") },
    ],
  },
];

const AppWithMenuBar = MenuBarGenerator(AppComponent, defaultMenuData);

export default function App() {
  return (
    <MenuBarProvider>
      <AppWithMenuBar />
    </MenuBarProvider>
  );
}
