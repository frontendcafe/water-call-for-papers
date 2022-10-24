import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";

export const TabsList = ({ children }: TypeChildren) => {
  return (
    <Tab.List className="flex px-4 pt-1 space-x-4 overflow-x-auto md:p-0 md:overflow-x-visible">
      {children}
    </Tab.List>
  );
};
