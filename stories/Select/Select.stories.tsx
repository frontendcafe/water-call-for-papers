import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Template   : ComponentStory<typeof Select> = (args) => (
    <Select {...args} />
);

/**
 * Select Template
 */
 export const SelectDefault = Template.bind({});

 SelectDefault.args = {
    description: "",
    errorMessage: "Este campo es obligatorio",
    isInputDisabled: false,
    isLabelVisible: true,
    label: "País",
    placeholder: "Elige tu país",
    values: [
        {
            name: "Argentina",
            value: "Argentina",
            isSelected: true
          },
          {
            name: "Chile",
            value: "Chile",
            isSelected: false
          },
          {
            name: "Uruguay",
            value: "Uruguay",
            isSelected: false
          }
    ],
};