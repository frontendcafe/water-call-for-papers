import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

// More info about default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More info about argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More info about component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More info about args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Stretched = Template.bind({});
Stretched.args = {
  size: "stretched",
  label: "Button",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading...",
  loading: true,
  rightIcon: "🦄",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  ariaLabel: "Icon",
  variant: "icon",
  icon: "🦄",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: "Label",
  icon: "🦄",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  label: "Label",
  rightIcon: "🦄",
};

// export const Label = Template.bind({});
// Label.args = {
//   // FIXME: TypeScript must be complaining about the missing label or ariaLabel prop, but it's not.
// };
