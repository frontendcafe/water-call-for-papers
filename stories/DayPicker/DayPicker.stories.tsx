import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { DayPicker } from "./DayPicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/globals.css";

export default {
  title: "Input/DatePicker",
  component: DayPicker,
} as ComponentMeta<typeof DayPicker>;

const Template: ComponentStory<typeof DayPicker> = (args) => {
  const [date, setDate] = useState<Date>(new Date());

  return <DayPicker {...args} date={date} onChange={setDate} />;
};

/**
 * InputText Template
 */
export const InputDatePickerDefault = Template.bind({});

InputDatePickerDefault.args = {
  label: "Fecha de inicio",
};
