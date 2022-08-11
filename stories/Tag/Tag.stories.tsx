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
  label: "Diseño UX",
  secondary: true,
};

export const SmallTag = Template.bind({});

SmallTag.args = {
  label: "Programación",
  primary: true,
  size: "sm",
};

export const MediumTag = Template.bind({});

MediumTag.args = {
  label: "Diseño UX",
  primary: true,
  size: "md",
};

export const LargeTag = Template.bind({});

LargeTag.args = {
  label: "UX Writing",
  primary: true,
  size: "lg",
};

export const HiddenTag = Template.bind({});

HiddenTag.args = {
  label: "UX Writing",
  primary: true,
  size: "lg",
  hidden: true,
};
