import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";
import { TabsContext } from "./TabsContext/TabsContext";

export const TabsList = ({ children }: TypeChildren) => {
  return (
    <TabsContext.Provider value={{}}>
      <Tab.List className="flex space-x-4 ">{children}</Tab.List>
    </TabsContext.Provider>
  );
};
