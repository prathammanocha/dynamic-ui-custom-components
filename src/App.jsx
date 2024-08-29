// src/App.jsx
import React from "react";
import { MenuBarProvider, useMenuBar } from "@/widgets/DynamicMenuBar/MenuBarContext";
import MenuBarGenerator from "./widgets/DynamicMenuBar/MenuBarGenerator";
import { CardProvider, useCard } from "./widgets/DynamicCard/CardContext";
import CardGenerator from "./widgets/DynamicCard/CardGenerator";
import { Button } from "./components/ui/button";

// Main Component
const AppComponent = () => {
  const { updateMenuBar } = useMenuBar();
  const { updateCard } = useCard();

  // Handle MenuBar update
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

  // Handle Card update
  const handleUpdateCard = () => {
    const newCardData = {
      title: "Updated Title",
      description: "Updated Description",
      content: "Updated Content",
      footer: "Updated Footer",
    };
    updateCard(newCardData);
  };

  return (
    <div>
      <h1>Welcome to the Main Application</h1>
      <Button onClick={handleUpdateMenuBar}>Update Menu Bar</Button>
      <Button onClick={handleUpdateCard}>Update Card</Button>
    </div>
  );
};

// Default Data for MenuBar and Card
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

const defaultCardData = {
  title: "Default Title",
  description: "Default Description",
  content: "Default Content",
  footer: "Default Footer",
};

// Wrap Main Component with Generators
const AppWithMenuBarAndCard = MenuBarGenerator(
  CardGenerator(AppComponent, defaultCardData),
  defaultMenuData
);

export default function App() {
  return (
    <MenuBarProvider>
      <CardProvider>
        <AppWithMenuBarAndCard />
      </CardProvider>
    </MenuBarProvider>
  );
}
