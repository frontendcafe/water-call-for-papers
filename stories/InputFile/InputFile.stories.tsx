import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputFile } from "./InputFile";

export default {
  title: "Input/File",
  component: InputFile,
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => (
  <InputFile {...args} />
);

export const InputFileDefault = Template.bind({});

InputFileDefault.args = {
  tabIndex: 1,
  label: "Banner del evento",
  placeholder: "Cargar imagen",
};
