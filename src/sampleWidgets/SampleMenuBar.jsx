import MenuBarGenerator from "@/widgets/CustomMenuBar/MenuBarGenerator";

const AppComponent = () => {
  return (
    <>
    </>
  );
};

const menuData = [
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

const SampleMenuBar = MenuBarGenerator(AppComponent, menuData);

export default SampleMenuBar;