import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioButtons } from "./radio-button";

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
  onChange: (value) => value, //There was a console.log(value) here but I remove it out so that I could commit the file
};
