import { Tab } from "@headlessui/react";

interface TabsProps {
  states: "active" | "disabled" | "noSelected" | "hover" | "focus";
}

const tabsStyles = {
  active: "border-b-4 border-cyan-700",
  noSelected: "text-blue-300",
  hover: "hover:bg-sky-700",
  focus: "focus:outline-none focus:ring focus:ring-cyan-400 rounded-lg",
};

export const Tabs = ({ states = "active" }: TabsProps) => {
  return <button className={`${tabsStyles[states]} py-2 px-4 `}>Todos</button>;
};
