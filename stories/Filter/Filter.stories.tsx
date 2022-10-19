import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { TagProps } from "../Tag/Tag";
import { Filter } from "./Filter";

export default {
  title: "Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const options = [
  { title: "Más viejo a más nuevo", isDisabled: false },
  { title: "Más nuevo a más viejo", isDisabled: false },
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

  const [selected, setSelected] = useState<string>(options[0].title);
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
      {/* TODO: Needs refactor */}
      <Filter.Radial
        label="Ordenar:"
        options={options}
        onSelectedChange={(value: string) => setSelected(value)}
        value={selected}
        defaultValue={options[0].title}
      />
      <Filter.Tags title="Tags:" tags={values} />
    </Filter>
  );
};

export const Default = Template.bind({});
Default.args = {};
