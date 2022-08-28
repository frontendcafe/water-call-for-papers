import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";
import { useTabsContext } from "./Hooks/useTabsContext";

export const TabsPanel = ({ children }: TypeChildren) => {
  useTabsContext("<TabsPanel />", "<TabsPanels");
  return <Tab.Panel className="bg-white p-3">{children}</Tab.Panel>;
};