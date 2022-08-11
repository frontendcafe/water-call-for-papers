import React from "react";
import { TagList } from "./TagList";
import * as TagStories from "../Tag/Tag.stories";
import { ComponentStory } from "@storybook/react";

export default {
  component: TagList,
  title: "TagList",
};

// const Template = (args) => <TagList {...args} />;
const Template: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tags: [
    { ...TagStories.PrimaryTag.args, label: "Ux Writing", style: "primary" },
    { ...TagStories.PrimaryTag.args, label: "Diseño UI", style: "secondary" },
    { ...TagStories.PrimaryTag.args, label: "Programación", style: "primary" },
  ],
};
