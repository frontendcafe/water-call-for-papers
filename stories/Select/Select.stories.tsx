import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

const storyValues = [
  {
    name: "Argentina",
    value: "Argentina",
    isSelected: true,
  },
  {
    name: "Chile",
    value: "Chile",
    isSelected: true,
  },
  {
    name: "Uruguay",
    value: "Uruguay",
    isSelected: false,
  },
]
/**
 * Select default template
 */
export const SelectDefault = Template.bind({});

SelectDefault.args = {
  description: "Aquí puedes elegir tu país de residencia",
  isInputDisabled: false,
  isLabelVisible: true,
  label: "País",
  placeholder: "Elige tu país",
  values: storyValues
};

/**
 * Select with error
 */
export const SelectWithError = Template.bind({});

SelectWithError.args = {
  description: "Aquí puedes elegir tu país de residencia",
  errorMessage: "Este campo es obligatorio",
  isInputDisabled: false,
  isLabelVisible: true,
  label: "País",
  placeholder: "Elige tu país",
  values: storyValues
};

/**
 * Select with hidden label
 */
 export const SelectWithHiddenLabel = Template.bind({});

 SelectWithHiddenLabel.args = {
   description: "Aquí puedes elegir tu país de residencia",
   errorMessage: "Este campo es obligatorio",
   isInputDisabled: false,
   isLabelVisible: false,
   label: "País",
   placeholder: "Elige tu país",
   values: storyValues
 };