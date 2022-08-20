import { Tab } from "@headlessui/react";
import { useState } from "react";

interface TabsProps {
  events: Array<{
    type: string;
    title: string;
    disabled: boolean;
  }>;
}

export const Tabs = ({ events }: TabsProps) => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex space-x-1">
          {events.map(({ type, disabled }) => (
            <Tab
              key={type}
              className={({ selected }) =>
                `
            py-2 px-4
            focus:outline-none focus:ring focus:ring-cyan-400
          ${
            selected
              ? "border-b-4 border-cyan-700"
              : "text-blue-300 hover:bg-cyan-400 hover:text-white"
          }
          `
              }
              disabled={disabled}
            >
              {type}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {events.map(({ title }) => (
            <Tab.Panel key={title}>{title}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
