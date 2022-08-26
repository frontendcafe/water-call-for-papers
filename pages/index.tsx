import type { NextPage } from "next";
import { Button } from "../stories/Button/Button";
import { RadioButtons } from "../stories/Radio/radio-button";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 rounded p-10">
      Hola
      <Button label="Click" />
      <RadioButtons
        onChange={(value) => value} //There was a console.log(value) here but I remove it out so that I could commit the file
        label="Modalidad del evento"
        options={[
          { title: "Presencial", isDisabled: false },
          { title: "Híbrido", isDisabled: false },
          { title: "Online", isDisabled: false },
        ]}
      />
    </div>
  );
};

export default Home;
