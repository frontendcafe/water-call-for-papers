import React from "react";
import { TagList } from "./TagList";
import * as TagStories from "../Tag/Tag.stories";
import { ComponentStory } from "@storybook/react";

export default {
  component: TagList,
  title: "TagList",
};

const Template: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  // Datos heredados de la historia PrimaryTag en Tag.stories.tsx
  tags: [
    { ...TagStories.PrimaryTag.args, label: "Ux Writing" },
    { ...TagStories.PrimaryTag.args, label: "Diseño UI", status: "event" },
    { ...TagStories.PrimaryTag.args, label: "Programación" },
  ],
};

export const WithOnClick = Template.bind({});

WithOnClick.args = {
  // Datos heredados de la historia PrimaryTag en Tag.stories.tsx
  tags: [
    { ...TagStories.PrimaryTag.args, label: "React", onClick: () => null },
    {
      ...TagStories.PrimaryTag.args,
      label: "Vue",
      status: "event",
      onClick: () => null,
      isSelected: true,
    },
    { ...TagStories.PrimaryTag.args, label: "Angular", onDelete: () => null },
  ],
};
