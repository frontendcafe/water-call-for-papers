import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionTres } from "./Accordion-3";

export default {
  title: "AccordionTres/Accordion",
  component: AccordionTres,
} as ComponentMeta<typeof AccordionTres>;

const Template: ComponentStory<typeof AccordionTres> = () => <AccordionTres />;

export const Accordion = Template.bind({});

Accordion.args = {
  title: "Convocatoria postulantes",
};
