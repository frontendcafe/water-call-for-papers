import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DayPicker } from "./DayPicker";

export default {
  title: "Input/DatePicker",
  component: DayPicker,
} as ComponentMeta<typeof DayPicker>;

const Template: ComponentStory<typeof DayPicker> = (args) => (
  <DayPicker {...args} />
);

/**
 * InputText Template
 */
export const InputDatePickerDefault = Template.bind({});

InputDatePickerDefault.args = {
  label: "Fecha de inicio",
  date: new Date(),
};
