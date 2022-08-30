import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spinner } from "../Icons/Spinner";

import { Button } from "./Button";

// More info about default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More info about argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: "text",
    },
  },
  // More info about args: https://storybook.js.org/docs/react/writing-stories/args#component-args
  args: {
    children: "Button",
    disabled: false,
    icon: false,
    loading: false,
    rounded: "medium",
    size: "medium",
    variant: "primary",
  },
} as ComponentMeta<typeof Button>;

// More info about component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More info about args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: "transparent",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Stretched = Template.bind({});
Stretched.args = {
  size: "stretched",
};

export const Loading = Template.bind({});
Loading.args = {
  children: (
    <>
      <>Loading...</> <Spinner />
    </>
  ),
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  disabled: true,
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  children: (
    // TODO: Add proper icon component or SVG
    <>
      <span>🦄</span> <span className="sr-only">Button</span>
    </>
  ),
  rounded: "medium",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  children: (
    // TODO: Add proper icon component or SVG
    <>
      <span className="sr-only">Button</span> <span>🦄</span>
    </>
  ),
  icon: true,
  rounded: "full",
};

export const IconWithoutBackground = Template.bind({});
IconWithoutBackground.args = {
  ...OnlyIcon.args,
  variant: "transparent",
};
