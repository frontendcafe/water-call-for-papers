import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "Example/Tag", // Title for our storybook
  component: Tag, // Component to render
  args: {
    //Todas las historias para el componente tag
    //tendran un estilo secundario por defecto
  },
} as ComponentMeta<typeof Tag>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});

DefaultTag.args = {
  label: "Programación",
  status: "approved",
};

export const PrimaryTag = Template.bind({});

PrimaryTag.args = {
  label: "Programación",
};

export const SecondaryTag = Template.bind({});

SecondaryTag.args = {
  label: "Diseño UX",
};

export const SmallTag = Template.bind({});

SmallTag.args = {
  label: "Programación",
};

export const MediumTag = Template.bind({});

MediumTag.args = {
  label: "Diseño UX",
};

export const LargeTag = Template.bind({});

LargeTag.args = {
  label: "UX Writing",
};
