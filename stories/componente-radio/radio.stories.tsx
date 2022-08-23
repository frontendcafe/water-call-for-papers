import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioButtons } from "./radio";

export default {
  title: "RadioButtons/MyRadioGroup", // Title for our storybook
  component: RadioButtons, // Component to render
} as ComponentMeta<typeof RadioButtons>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
//👇 We pass the props to the Primary story
Default.args = {
  label: "Modalidad del evento",
  opciones: [
    { title: "Presencial", isDisabled: false },
    { title: "Híbrido", isDisabled: false },
    { title: "Online", isDisabled: false },
  ],
  onChange: (value) => value, //Pruebo si borrando el console.log(value) me deja commitear
};
