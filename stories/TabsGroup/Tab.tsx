import React from "react";
import { Tab } from "@headlessui/react";
import { TabsProps } from "./types";
import { useTabsContext } from "./Hooks/useTabsContext";

const Tabs = ({ children, disabled }: TabsProps) => {
  const componenteName = "tab";
  useTabsContext("<Tab />", "<TabsList />", componenteName);

  return (
    <Tab
      className={({ selected }) =>
        `
  py-2 px-4
  focus:outline-none focus:ring-2 focus:ring-blue-800 rounded-t-lg 
${
  selected
    ? "bg-white text-blue-800 font-semibold"
    : "text-slate-400 hover:bg-blue-300 hover:text-white"
}
`
      }
      disabled={disabled}
    >
      {children}
    </Tab>
  );
};

export { Tabs as Tab };
