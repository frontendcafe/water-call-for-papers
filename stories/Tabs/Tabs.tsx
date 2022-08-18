import { Tab } from "@headlessui/react";

interface TabsProps {
  states: "selected" | "noSelected" | "hover" | "focus";
}

const tabsStyles = {
  selected: "shadow border-b-4 border-cyan-700",
  noSelected: "text-blue-300",
  hover: "hover:bg-sky-700",
  focus: "focus:outline-none focus:ring focus:ring-violet-300",
};

export const Tabs = ({ states = "selected" }: TabsProps) => {
  return <button className={`${tabsStyles[states]}`}>Todos</button>;
};
