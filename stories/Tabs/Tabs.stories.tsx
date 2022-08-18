import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "TabsGroup/Tabs",
  component: Tabs,
  args: {
    selected: true,
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const DefaultTabs = Template.bind({});

export const SelectedTabs = Template.bind({});
SelectedTabs.args = {
  selected: true,
};
