import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButtons from "./Radio";
import { useState } from "react";

export default {
  title: "RadioButtons/MyRadioGroup", // Title for our storybook
  component: RadioButtons, // Component to render
} as ComponentMeta<typeof RadioButtons>;

//👇 We create a “template” of how args map to rendering
/*const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);*/

// I commented because I didn't want to lose it but I had to commit

export const RadioGroupButtons: ComponentStory<typeof RadioButtons> = () => {
  const options = [
    { title: "Presencial", isDisabled: false },
    { title: "Online", isDisabled: false },
    { title: "Híbrido", isDisabled: false },
  ];
  const [selected, setSelected] = useState<string>(options[0].title);
  //Typing functions with <type> is like using : in the props
  return (
    //I have to check Figma's styles
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
