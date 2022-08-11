import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "Example/Tag", // Title for our storybook
  component: Tag, // Component to render
} as ComponentMeta<typeof Tag>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const PrimaryTag = Template.bind({});

PrimaryTag.args = {
  label: "Programación",
  primary: true,
};

export const SecondaryTag = Template.bind({});

SecondaryTag.args = {
  label: "UI/UX Design",
  secondary: true,
};
