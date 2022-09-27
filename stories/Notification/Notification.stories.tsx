import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Notification } from "./Notification";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    title: "Die unendliche Geschichte",
    description: "La historia interminable.",
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Toast = Template.bind({});

Toast.args = {
  icon: <Icon iconName="book" aria-hidden />,
  timer: 10,
  children: (
    <>
      <Button children="left" size="small" />
      <Button children="right" variant="secondary" size="small" />
    </>
  ),
  color: "toast",
  role: "alert",
};

export const NotificationComp = Template.bind({});

NotificationComp.args = {
  icon: <Icon iconName="book" aria-hidden />,
  color: "notification",
};

export const Warning = Template.bind({});

Warning.args = {
  icon: <Icon iconName="book" aria-hidden />,
  color: "warning",
};

export const Error = Template.bind({});

Error.args = {
  icon: <Icon iconName="book" aria-hidden />,
  color: "error",
};
