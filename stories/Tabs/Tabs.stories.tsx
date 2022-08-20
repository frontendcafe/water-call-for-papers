import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./Tabs";

const events = [
  {
    type: "Todos",
    title: "Todos los eventos",
    disabled: false,
  },
  {
    type: "En curso",
    title: "Eventos en curso",
    disabled: false,
  },
  {
    type: "Guardados",
    title: "Eventos guardados",
    disabled: false,
  },
  {
    type: "Finalizados",
    title: "Eventos finalizados",
    disabled: true,
  },
];

export default {
  title: "TabsGroup/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => <Tabs events={events} />;

export const DefaultNavTabs = Template.bind({});
