import type { NextPage } from "next";
import { Button } from "../stories/Button/Button";
import { RadioButtons } from "../stories/componente-radio/radio";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 rounded p-10">
      Hola
      <Button label="Click" />
      <RadioButtons
        onChange={(value) => value} //Pruebo si borrando el console.log(value) me deja commitear
        label="Modalidad del evento"
        opciones={[
          { title: "Presencial", isDisabled: false },
          { title: "Híbrido", isDisabled: false },
          { title: "Online", isDisabled: false },
        ]}
      />
    </div>
  );
};

export default Home;
