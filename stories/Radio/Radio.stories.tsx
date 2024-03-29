import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { EventType } from "../../types/events-types";
import { ProposalStatus } from "../../types/talk-types";
import { RadioButtons, SelectedOption } from "./Radio";

export default {
  title: "Components/Radio",
  component: RadioButtons,
} as ComponentMeta<typeof RadioButtons>;

const modeOptions = [
  { title: "Presencial", value: EventType.Presencial },
  { title: "Online", value: EventType.Virtual },
  { title: "Híbrido", value: EventType.Hibrido },
];

export const Modalidad: ComponentStory<typeof RadioButtons> = () => {
  const [selected, setSelected] = useState<SelectedOption>(modeOptions[0]);

  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Modalidad (*)"
        onSelectedChange={setSelected}
        options={modeOptions}
        value={selected}
        defaultValue={modeOptions[0].value}
      />
    </div>
  );
};

const sortOptions = [
  { title: "Más viejo a más nuevo", value: "asc" },
  { title: "Más nuevo a más viejo", value: "desc" },
];

export const Ordenar: ComponentStory<typeof RadioButtons> = () => {
  const [selected, setSelected] = useState<SelectedOption>(sortOptions[0]);

  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Ordenar:"
        onSelectedChange={setSelected}
        options={sortOptions}
        value={selected}
        defaultValue={sortOptions[0].value}
      />
    </div>
  );
};

const talkOptions = [
  { title: "En revisión", value: ProposalStatus.EnEspera },
  { title: "Aprobada", value: ProposalStatus.Aprobada },
  { title: "Desestimada", value: ProposalStatus.Rechazada },
];

export const Estado: ComponentStory<typeof RadioButtons> = () => {
  const [selected, setSelected] = useState<SelectedOption>(talkOptions[0]);

  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Estado:"
        onSelectedChange={setSelected}
        options={sortOptions}
        value={selected}
        defaultValue={talkOptions[0].value}
      />
    </div>
  );
};
