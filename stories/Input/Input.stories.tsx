import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "./InputText";

export default {
  title: "Input/Input",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

/**
 * InputText Template
 */
export const InputTextDefault = Template.bind({});

InputTextDefault.args = {
  label: "Label Name",
  placeholder: "Text your text here ...",
  disabled: false,
  visible: true,
};

/**
 * InputText with Description Template
 */
export const InputWithDescription = Template.bind({});

InputWithDescription.args = {
  label: "Label Name",
  placeholder: "Text your text here ...",
  description: "This is a description",
  disabled: false,
  visible: true,
};

/**
 * InputText with Error Template
 */
export const InputWithError = Template.bind({});

InputWithError.args = {
  label: "Label Name",
  placeholder: "Text your text here ...",
  error: "This is an error",
  visible: true,
};

/**
 * InputText with Error Template
 */
export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
  label: "Label Name",
  placeholder: "Text your text here ...",
  pathIcon: "",
  otherPathIcon: "",
  colorIcon: "",
  position: "left",
  visible: true,
};
