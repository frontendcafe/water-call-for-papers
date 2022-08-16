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
  label: "Banner del evento",
  placeholder: "Cargar imagen",
  description: "1500 x 600. Max. 5MB",
};

export const InputFileWithoutDescription = Template.bind({});

InputFileWithoutDescription.args = {
  label: "Banner del evento",
  placeholder: "Cargar imagen",
};
