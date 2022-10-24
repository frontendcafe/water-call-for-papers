import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Clip } from "./Clip";

export default {
  title: "Clipboard",
  component: Clip,
} as ComponentMeta<typeof Clip>;

const Template: ComponentStory<typeof Clip> = (args) => <Clip {...args} />;

export const ClipBoardHistory = Template.bind({});
ClipBoardHistory.args = {
  clipTextValue: "https://github.com/",
};
