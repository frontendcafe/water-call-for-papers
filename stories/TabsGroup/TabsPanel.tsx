import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";

export const TabsPanel = ({ children }: TypeChildren) => {
  return <Tab.Panel>{children}</Tab.Panel>;
};
