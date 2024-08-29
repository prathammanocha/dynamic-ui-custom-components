// src/widgets/MenuBarTemplate.jsx
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenuBarTemplate = ({ items }) => {
  return (
    <Menubar>
      {items.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>{item.label}</MenubarTrigger>
          <MenubarContent>
            {item.menuItems.map((menuItem, i) => (
              <MenubarItem key={i} onClick={menuItem.action}>
                {menuItem.label}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default MenuBarTemplate;
