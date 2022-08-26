import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Clip } from "./Clip";

export default {
  title: "Clipboard",
  component: Clip,
} as ComponentMeta<typeof Clip>;

const Template: ComponentStory<typeof Clip> = (args) => <Clip {...args} />;

export const ClipGit = () => <Clip clipTextValue={"https://github.com/"} />;

export const ClipAmazon = () => <Clip clipTextValue={"https://amazon.com/"} />;
