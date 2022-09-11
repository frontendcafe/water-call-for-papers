import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GeneratedData } from "./GeneratedData";

export default {
  title: "Acordeon/GeneratedData",
  component: GeneratedData,
} as ComponentMeta<typeof GeneratedData>;

const Template: ComponentStory<typeof GeneratedData> = () => <GeneratedData />;

export const GeneratedDataDefault = Template.bind({});
