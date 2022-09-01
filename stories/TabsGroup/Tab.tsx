import React from "react";
import { Tab } from "@headlessui/react";
import { TabsProps } from "./types";
import { useTabsContext } from "./Hooks/useTabsContext";

const setClassName = (selected: boolean, disabled: boolean) => {
  const disableClass = disabled ? "" : "hover:bg-blue-300 hover:text-white";
  const disabledAndNotSelectedClass =
    disabled && !selected ? "text-slate-300" : "text-slate-500";

  return selected
    ? "bg-white text-blue-800 font-semibold"
    : `${disabledAndNotSelectedClass} ${disableClass}`;
};

const Tabs = ({ children, disabled }: TabsProps) => {
  const componenteName = "tab";
  useTabsContext("<Tab />", "<TabsList />", componenteName);

  return (
    <Tab
      className={({ selected }) =>
        `
       py-2 px-4
       focus:outline-none focus:ring-2 focus:ring-blue-800 rounded-t-lg 
        ${setClassName(selected, disabled)}
       `
      }
      disabled={disabled}
    >
      {children}
    </Tab>
  );
};

export { Tabs as Tab };
