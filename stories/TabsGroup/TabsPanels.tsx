import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";
import { TabsContext } from "./TabsContext/TabsContext";

export const TabsPanels = ({ children }: TypeChildren) => {
  return (
    <TabsContext.Provider value={{ PanelsParent: true }}>
      <Tab.Panels>{children}</Tab.Panels>
    </TabsContext.Provider>
  );
};
