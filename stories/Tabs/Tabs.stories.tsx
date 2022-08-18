import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "TabsGroup/Tabs",
  component: Tabs,
  args: {
    states: "active",
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const DefaultTabs = Template.bind({});

export const SelectedTabs = Template.bind({});

export const NotSelectedTabs = Template.bind({});
NotSelectedTabs.args = {
  states: "noSelected",
};

export const FocusTabs = Template.bind({});
FocusTabs.args = {
  states: "focus",
};
