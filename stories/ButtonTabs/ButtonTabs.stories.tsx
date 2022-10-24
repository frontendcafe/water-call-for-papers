import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonTabs } from "./ButtonTabs";

export default {
  title: "TabsGroup/ButtonTabs",
  component: ButtonTabs,
  args: {
    states: "active",
  },
} as ComponentMeta<typeof ButtonTabs>;

const Template: ComponentStory<typeof ButtonTabs> = (args) => (
  <ButtonTabs {...args} />
);

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

export const HoverTabs = Template.bind({});
HoverTabs.args = {
  states: "hover",
};
