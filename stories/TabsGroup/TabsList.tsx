import React from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";

export const TabsList = ({ children }: TypeChildren) => {
  return <Tab.List className="flex space-x-4">{children}</Tab.List>;
};
