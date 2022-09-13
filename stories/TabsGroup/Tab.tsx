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
      className={({ selected }) =>
        `py-2 px-4 whitespace-nowrap focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 rounded-t-xl ${setClassName(
          selected,
          disabled
        )}
       `
      }
      disabled={disabled}
    >
      {children}
    </Tab>
  );
};

export { Tabs as Tab };
