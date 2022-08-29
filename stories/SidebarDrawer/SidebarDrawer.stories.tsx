import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SidebarDrawer } from "./SidebarDrawer";

export default {
  title: "Components/SidebarDrawer",
  component: SidebarDrawer,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof SidebarDrawer>;

const Template: ComponentStory<typeof SidebarDrawer> = (args) => (
  <SidebarDrawer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
