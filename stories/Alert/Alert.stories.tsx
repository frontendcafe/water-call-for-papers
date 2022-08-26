import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,

  args: {
    "aria-live": "polite",
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Notification = Template.bind({});
Notification.args = {
  title: "Titulo",
  text: "En caso de que la propuesta sera aprobada, deberás poder asistir físicamente en las fechas establecidas a:",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Notification.args,
  type: "warning",
};

export const NotificationWithoutTitle = Template.bind({});
NotificationWithoutTitle.args = {
  ...Notification.args,
  title: "",
};

export const WarningWithIcon = Template.bind({});
WarningWithIcon.args = {
  type: "warning",
  children: (
    <div className="flex items-center gap-4">
      <div>⚠</div>
      <div className="flex-grow ">
        <p className="text-sm">
          <strong>This is a strong tag: </strong> within a paragraph tag
        </p>
      </div>
    </div>
  ),
};
