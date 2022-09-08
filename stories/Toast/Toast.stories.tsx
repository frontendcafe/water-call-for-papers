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
    // icon: (
    //   <Icon
    //     iconName="exclamationCircle"
    //     size="medium"
    //     aria-hidden
    //     className="text-[#4B64EF]"
    //   />
    // ),
    title: "First toast! :D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla.",
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Buttons = Template.bind({});

Buttons.args = {
  leftActionButton: (
    <Button children={"Left"} variant="primary" aria-label="Left" />
  ),
  rightActionButton: (
    <Button children={"Right"} variant="primary" aria-label="Right" />
  ),
  timer: 1000,
};

export const TimerThreeSec = Template.bind({});

TimerThreeSec.args = {
  title: "Die unendliche Geschichte",
  description: "La historia interminable.",
  icon: <Icon iconName="book" className="text-[#4B64EF]" aria-hidden />,
  rightActionButton: (
    <Button children={"Right"} variant="primary" aria-label="Right" />
  ),
  timer: 30,
};
