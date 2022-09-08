import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButtons from "./Radio";
import { useState } from "react";

export default {
  title: "RadioButtons/Radio", // Title for our storybook
  component: RadioButtons, // Component to render
} as ComponentMeta<typeof RadioButtons>;

export const Modalidad: ComponentStory<typeof RadioButtons> = () => {
  const options = [
    { title: "Presencial", isDisabled: false },
    { title: "Online", isDisabled: false },
    { title: "Híbrido", isDisabled: false },
  ];
  const [selected, setSelected] = useState<string>(options[0].title);
  //Typing functions with <type> is like using : in the props
  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Modalidad (*)"
        options={options}
        onSelectedChange={(value: string) => setSelected(value)}
        value={selected}
        defaultValue={options[0].title}
      />
    </div>
  );
};

export const Ordenar: ComponentStory<typeof RadioButtons> = () => {
  const options = [
    { title: "Más viejo a más nuevo", isDisabled: false },
    { title: "Más nuevo a más viejo", isDisabled: false },
  ];
  const [selected, setSelected] = useState<string>(options[0].title);
  //Typing functions with <type> is like using : in the props
  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Ordenar:"
        options={options}
        onSelectedChange={(value: string) => setSelected(value)}
        value={selected}
        defaultValue={options[0].title}
      />
    </div>
  );
};

export const Estado: ComponentStory<typeof RadioButtons> = () => {
  const options = [
    { title: "En revisión", isDisabled: false },
    { title: "Aprobada", isDisabled: false },
    { title: "Desestimada", isDisabled: false },
  ];
  const [selected, setSelected] = useState<string>(options[0].title);
  //Typing functions with <type> is like using : in the props
  return (
    <div className="flex flex-col items-start">
      <RadioButtons
        label="Estado:"
        options={options}
        onSelectedChange={(value: string) => setSelected(value)}
        value={selected}
        defaultValue={options[0].title}
      />
    </div>
  );
};
