import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionTres } from "./Accordion-3";

export default {
  title: "Accordion-Three/Accordion",
  component: AccordionTres,
} as ComponentMeta<typeof AccordionTres>;

const Template: ComponentStory<typeof AccordionTres> = (args) => (
  <AccordionTres {...args} />
);

export const Accordion = Template.bind({});

Accordion.args = {
  title: "Convocatoria postulantes",
};
