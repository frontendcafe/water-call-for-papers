import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "TabsGroup/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => <Tabs />;

export const DefaultTabs = Template.bind({});
