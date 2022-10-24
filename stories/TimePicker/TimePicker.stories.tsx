import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TimePicker } from "./TimePicker";

export default {
  title: "Components/TimePicker",
  component: TimePicker,
  args: {
    label: "Hora de inicio",
  },
  decorators: [
    (Story) => (
      <div className="w-1/4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => (
  <TimePicker {...args} />
);

export const TimePickerDefault = Template.bind({});

export const TimePickerWithError = Template.bind({});
TimePickerWithError.args = {
  errorMessage: "Este campo es requerido",
  isValue: false,
};

export const TimePickerWithTime = Template.bind({});
TimePickerWithTime.args = {
  time: "15:40",
  isValue: true,
};
