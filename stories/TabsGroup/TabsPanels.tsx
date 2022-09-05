import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";

export const TabsPanels = ({ children }: TypeChildren) => {
  return <Tab.Panels>{children}</Tab.Panels>;
};
