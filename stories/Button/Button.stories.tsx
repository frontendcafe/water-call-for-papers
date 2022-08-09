import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Example/Button", // Title for our storybook
  component: Button, // Component to render
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
//👇 We pass the props to the Primary story
Primary.args = {
  label: "Button",
  backgroundColor: "red",
};
