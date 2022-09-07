import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toast } from "./Toast";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    content: {
      icon: (
        <Icon
          iconName="exclamationCircle"
          aria-hidden
          className="text-[#4B64EF]"
        />
      ),
      title: "First toast! :D",
      description:
        "The first of many First toast! :DFirst toast! :DFirst toast! :DFirst toast! :DFirst toast! :DFirst toast! :DFirst toast! :DFirst toast! :D",
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Buttons = Template.bind({});

Buttons.args = {
  actionButtons: {
    leftSideBtn: (
      <Button children={"Left"} variant="primary" aria-label="Left" />
    ),
    rightSideBtn: (
      <Button children={"Right"} variant="primary" aria-label="Right" />
    ),
  },
  timer: 1000,
};

export const Text = Template.bind({});

Text.args = {
  content: {
    icon: <Icon iconName="book" aria-hidden className="text-[#4B64EF]" />,
    title: "Just text",
    description: "Its timer has been set to 5 seconds.",
  },
  timer: 5,
};

export const TextWithoutIcon = Template.bind({});

TextWithoutIcon.args = {
  content: {
    title: "More text",
    description:
      "It has a timer of 10 seconds. Transitions and Animation Layout Spacing Backgrounds Typography Interactivity Box Alignment",
  },
  timer: 10,
};

export const TimerThreeSec = Template.bind({});

TimerThreeSec.args = {
  content: {
    title: "More text",
    description:
      "Transitions and Animation Layout Spacing Backgrounds Typography Interactivity Box Alignment",
  },
  timer: 3,
};
