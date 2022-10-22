import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { SelectedOption } from "../Radio/Radio";
import { TagProps } from "../Tag/Tag";
import { Filter } from "./Filter";

export default {
  title: "Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const options = [
  { label: "Más viejo a más nuevo", value: "asc" },
  { label: "Más nuevo a más viejo", value: "desc" },
];

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

  const [selected, setSelected] = useState<SelectedOption>(options[0]);
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

  return (
    <Filter {...args} btnLabel="Filtros" title="Filtros">
      <Filter.Radial
        label="Ordenar:"
        onChange={setSelected}
        options={options}
        value={selected}
      />
      <Filter.Tags title="Tags:" tags={values} />
    </Filter>
  );
};

export const Default = Template.bind({});
Default.args = {};
