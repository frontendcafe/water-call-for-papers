import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { createTopic } from "../../lib/fetcher";
import { Topic } from "../../types/talk-types";
import { Icon } from "../Icon/Icon";
import ComboboxComponent from "./Combobox";

// More info about default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Combobox",
  component: ComboboxComponent,
} as ComponentMeta<typeof ComboboxComponent>;

// More info about component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof ComboboxComponent> = (args) => (
//   <ComboboxComponent {...args} />
// );

const topicsObj = [
  {
    description: "Diseño UX",
    id: "4000001",
  },
  {
    id: "4000002",
    description: "Frontend",
  },
  {
    id: "4000003",
    description: "Backend",
  },
  {
    id: "4000004",
    description: "JavaScript",
  },
  {
    description: "React",
    id: "4000005",
  },
  {
    description: "Angular",
    id: "4000006",
  },
];

export const TopicsCombobox = () => {
  const [topicsSelected, setTopicsSelected] = useState<Set<string>>(
    new Set([])
  );
  const [topics] = useState<Topic[] | null>(topicsObj);

  const createTopicHandler = async (value: string) => {
    try {
      await createTopic({ description: value });
      const newTopicsSelected = new Set(topicsSelected);
      newTopicsSelected.add(value);
      setTopicsSelected(newTopicsSelected);
    } catch (error) {
      // TODO: Agregar notificación de error
    }
  };

  return (
    <div className="w-96">
      <h4 className="font-semibold text-base text-white mb-2">Tema</h4>
      <ComboboxComponent
        valuesSelected={topicsSelected}
        onChange={setTopicsSelected}
        options={topics?.map(({ id, description }) => ({
          id,
          label: description,
        }))}
        actionLabel={
          <button className="flex flex-row gap-2 text-blue-600">
            <Icon iconName="plus" size="medium" />
            <span>Crear tema</span>
          </button>
        }
        actionHandler={createTopicHandler}
        placeholder={"Ingrese hasta 5 temas"}
        noOptionsLabel={"Aún no hay temas"}
      />
    </div>
  );
};
