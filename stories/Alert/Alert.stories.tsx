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

export const AnAlert = Template.bind({});
AnAlert.args = {
  title: "Titulo",
  text: "En caso de que la propuesta sera aprobada, deberás poder asistir físicamente en las fechas establecidas a:",
};

export const Error = Template.bind({});
Error.args = {
  ...AnAlert.args,
  type: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  ...AnAlert.args,
  type: "warning",
};

export const Valid = Template.bind({});
Valid.args = {
  ...AnAlert.args,
  type: "valid",
};

export const AlertWithoutTitle = Template.bind({});
AlertWithoutTitle.args = {
  ...AnAlert.args,
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
