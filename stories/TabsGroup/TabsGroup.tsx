import { Tab } from "@headlessui/react";
import React from "react";
import { TypeChildren } from "./types";

export const TabsGroup = ({ handler, children }: TypeChildren) => {
  return <Tab.Group onChange={handler}>{children}</Tab.Group>;
};
