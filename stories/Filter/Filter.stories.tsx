import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { TagProps } from "../Tag/Tag";
import { Filter } from "./Filter";

export default {
  title: "Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => {
  const tagList: Array<TagProps> = [
    {
      label: "data",
      size: "sm",
      status: "theme",
      onClick: test,
    },
    {
      label: "data2",
      size: "sm",
      status: "theme",
      onClick: test,
    },
  ];

  const [values, setValues] = useState(tagList);
  function test(params: string) {
    setValues((previews) => {
      return previews.map((obj) => {
        if (obj.label === params) {
          return {
            ...obj,
            isSelected: !obj.isSelected,
          };
        }
        return obj;
      }) as Array<TagProps>;
    });
  }

  return <Filter {...args} tags={values} />;
};

export const Default = Template.bind({});
Default.args = {};
