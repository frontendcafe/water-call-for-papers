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
    { ...TagStories.PrimaryTag.args, label: "Diseño UI", style: "secondary" },
    { ...TagStories.PrimaryTag.args, label: "Programación" },
  ],
};
