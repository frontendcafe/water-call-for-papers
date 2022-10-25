import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "./InputText";

export default {
  title: "Components/Input",
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
  idValue: "",
  placeholder: "Text your text here ...",
  disabled: false,
};

/**
 * InputText with Description Template
 */
export const InputWithDescription = Template.bind({});

InputWithDescription.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  description: "This is a description",
  disabled: false,
};

/**
 * InputText with Error Template
 */
export const InputWithError = Template.bind({});

InputWithError.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  error: "This is an error",
};

/**
 * InputText with Error Template
 */
export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  position: "left",
};

/**
 * InputText with Disabled Template
 */
export const InputWithDisabled = Template.bind({});

InputWithDisabled.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  disabled: true,
};

/**
 * InputText without Label
 */
export const InputWithoutLabel = Template.bind({});

InputWithoutLabel.args = {
  label: "",
  idValue: "",
  placeholder: "Text your text here ...",
};

/**
 * InputText with required
 */
export const InputWithRequired = Template.bind({});

InputWithRequired.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
};
