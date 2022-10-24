import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";

export const TabsPanel = ({ children }: TypeChildren) => {
  return (
    <Tab.Panel className="bg-white p-3 rounded-b-xl rounded-r-xl">
      {children}
    </Tab.Panel>
  );
};
