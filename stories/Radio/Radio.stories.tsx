import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { EventType } from "../../types/events-types";
import { ProposalStatus } from "../../types/talk-types";
import { RadioButtons, SelectedOption } from "./Radio";

export default {
  title: "Components/Radio", // Title for our storybook
  component: RadioButtons, // Component to render
} as ComponentMeta<typeof RadioButtons>;

const modeOptions = [
  { label: "Presencial", value: EventType.Presencial },
  { label: "Online", value: EventType.Virtual },
  { label: "Híbrido", value: EventType.Hibrido },
];

export const Modalidad: ComponentStory<typeof RadioButtons> = () => {
  const [selected, setSelected] = useState<SelectedOption>(modeOptions[0]);

  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Modalidad (*)"
        onChange={setSelected}
        options={modeOptions}
        value={selected}
      />
    </div>
  );
};

const sortOptions = [
  { label: "Más viejo a más nuevo", value: "asc" },
  { label: "Más nuevo a más viejo", value: "desc" },
];

export const Ordenar: ComponentStory<typeof RadioButtons> = () => {
  const [selected, setSelected] = useState<SelectedOption>(sortOptions[0]);

  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Ordenar:"
        onChange={setSelected}
        options={sortOptions}
        value={selected}
      />
    </div>
  );
};

const talkOptions = [
  { label: "En revisión", value: ProposalStatus.EnEspera },
  { label: "Aprobada", value: ProposalStatus.Aprobada },
  { label: "Desestimada", value: ProposalStatus.Rechazada },
];

export const Estado: ComponentStory<typeof RadioButtons> = () => {
  const [selected, setSelected] = useState<SelectedOption>(talkOptions[0]);

  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Estado:"
        onChange={setSelected}
        options={sortOptions}
        value={selected}
      />
    </div>
  );
};
