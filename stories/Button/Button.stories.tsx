import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Bookmark } from "../Icons/Bookmark";
import { DotsVertical } from "../Icons/DotsVertical";
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
    children: (
      <>
        <Bookmark /> Button <Bookmark />
      </>
    ),
    disabled: false,
    icon: false,
    loading: false,
    rounded: "medium",
    size: "normal",
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
    <>
      <DotsVertical /> <span className="sr-only">Button</span>
    </>
  ),
  icon: true,
  variant: "secondary",
  rounded: "medium",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  children: (
    <>
      <span className="sr-only">Button</span> <DotsVertical />
    </>
  ),
  icon: true,
  variant: "secondary",
  rounded: "full",
};

export const IconWithoutBackground = Template.bind({});
IconWithoutBackground.args = {
  ...OnlyIcon.args,
  variant: "transparent",
};
