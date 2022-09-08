import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EventData } from "../../types/events-types";

import { SidebarDrawer } from "./SidebarDrawer";

const dummyData: Pick<EventData, "id" | "name">[] = [
  { id: "evt1", name: "CMYK" },
  { id: "evt2", name: "Frontend Cafe" },
  { id: "evt3", name: "Service Design Club" },
];

export default {
  title: "Components",
  component: SidebarDrawer,
  argTypes: {},
  args: {
    events: dummyData,
  },
} as ComponentMeta<typeof SidebarDrawer>;

const Template: ComponentStory<typeof SidebarDrawer> = (args) => (
  <SidebarDrawer {...args} />
);

export const NavbarDrawer = Template.bind({});
NavbarDrawer.args = {};
