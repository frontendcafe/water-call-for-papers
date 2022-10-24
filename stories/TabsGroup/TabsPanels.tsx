import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { TypeChildren } from "./types";

export const TabsPanels = ({ children }: TypeChildren) => {
  return <Tab.Panels as={Fragment}>{children}</Tab.Panels>;
};
