import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionDefault } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: AccordionDefault,
} as ComponentMeta<typeof AccordionDefault>;

const Template: ComponentStory<typeof AccordionDefault> = (args) => (
  <AccordionDefault {...args} />
);

/**
 * Accordion Template
 */
export const Accordion = Template.bind({});

Accordion.args = {
  title: "Datos generales",
};
