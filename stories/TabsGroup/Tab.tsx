import React from "react";
import { Tab } from "@headlessui/react";
import { TabsProps } from "./types";

const setClassName = (selected: boolean, disabled: boolean) => {
  const disableClass = disabled ? "" : "hover:bg-blue-300 hover:text-white";
  const disabledAndNotSelectedClass =
    disabled && !selected ? "text-slate-300" : "text-slate-500";

  return selected
    ? "bg-white text-blue-800 font-semibold"
    : `${disabledAndNotSelectedClass} ${disableClass}`;
};

const Tabs = ({ children, disabled }: TabsProps) => {
  return (
    <Tab
      className={({ selected }) => `
       py-2 px-2 md:px-4 text-xs md:text-sm lg:text-base
       focus:outline-none focus:ring-2 focus:ring-blue-800 rounded-t-lg 
        ${setClassName(selected, disabled)}`}
      disabled={disabled}
    >
      {children}
    </Tab>
  );
};

export { Tabs as Tab };
