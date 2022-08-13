import { ComponentMeta, ComponentStory } from "@storybook/react";

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
    loading: false,
    disabled: false,
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

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
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
  children: "Loading...",
  loading: true,
  rightIcon: "🦄",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
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
  icon: "🦄",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: "🦄",
};

// export const Label = Template.bind({});
// Label.args = {
//   // FIXME: TypeScript must be complaining about the missing label or ariaLabel prop, but it's not.
// };
