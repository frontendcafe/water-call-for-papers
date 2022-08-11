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
  idValue: "",
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
  idValue: "",
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
  idValue: "",
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
  idValue: "",
  placeholder: "Text your text here ...",
  pathIcon:
    "M13.8 2.59985H4.2C2.43269 2.59985 1 4.03254 1 5.79985V13.7999C1 15.5672 2.43269 16.9999 4.2 16.9999H13.8C15.5673 16.9999 17 15.5672 17 13.7999V5.79985C17 4.03254 15.5673 2.59985 13.8 2.59985Z",
  otherPathIcon:
    "M1 7.40024H17M5.8 1.00024V4.20024V1.00024ZM12.2 1.00024V4.20024V1.00024Z",
  colorIcon: "red-500",
  position: "left",
  visible: true,
};

/**
 * InputText with Disabled Template
 */
export const InputWithDisabled = Template.bind({});

InputWithDisabled.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  visible: true,
  disabled: true,
};

/**
 * InputText with Disabled Template
 */
export const InputWithoutLabel = Template.bind({});

InputWithoutLabel.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  visible: false,
};

/**
 * InputText with Disabled Template
 */
export const InputWithRequired = Template.bind({});

InputWithRequired.args = {
  label: "Label Name",
  idValue: "",
  placeholder: "Text your text here ...",
  visible: true,
  required: "Este campo es requerido",
  icon: "⚠️",
};
