import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  args: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});

DefaultTag.args = {
  label: "Programación",
  status: "approved",
};

export const PrimaryTag = Template.bind({});

PrimaryTag.args = {
  label: "Programación",
};

export const SecondaryTag = Template.bind({});

SecondaryTag.args = {
  label: "Diseño UX",
};

export const SmallTag = Template.bind({});

SmallTag.args = {
  label: "Programación",
};

export const MediumTag = Template.bind({});

MediumTag.args = {
  label: "Diseño UX",
};

export const LargeTag = Template.bind({});

LargeTag.args = {
  label: "UX Writing",
};
