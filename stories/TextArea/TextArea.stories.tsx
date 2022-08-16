import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextArea } from "./TextArea";

export default {
  title: "Example/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary",
  isLabelVisible: false,
  description: "I'm running out of ideas",
  idValue: "Primary",
  maxLength: 250,
  placeholder: "Another placeholder!",
  required: true,
};

export const MaxLengthTextArea = Template.bind({});

MaxLengthTextArea.args = {
  label: "MaxLength",
  isLabelVisible: true,
  idValue: "MaxLengthTextArea",
  maxLength: 200,
  placeholder: "Random label",
};

export const DisabledTextArea = Template.bind({});

DisabledTextArea.args = {
  label: "Disabled",
  isLabelVisible: true,
  idValue: "DisabledTextArea",
  maxLength: 200,
  placeholder:
    "This text area is disabled :/ And it has values for cols and rows attributes",
  disabled: true,
  columns: 2,
  rows: 10,
};

export const ErrorTextArea = Template.bind({});

ErrorTextArea.args = {
  label: "Text area with error",
  isLabelVisible: true,
  idValue: "ErrorTextArea",
  maxLength: 180,
  value: "ErrorTextArea",
  error: "This is an error!",
};

export const DescriptionTextArea = Template.bind({});

DescriptionTextArea.args = {
  label: "Description",
  isLabelVisible: false,
  idValue: "DescriptionTextArea",
  description: "This is a random description",
  maxLength: 190,
  placeholder:
    "I should study German, this is a reminder for me of the future? Could be.",
};
