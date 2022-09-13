import { Tab } from "@headlessui/react";
import React from "react";
import { TypeChildren } from "./types";

export const TabsGroup = ({ children }: TypeChildren) => {
  return <Tab.Group>{children}</Tab.Group>;
};
