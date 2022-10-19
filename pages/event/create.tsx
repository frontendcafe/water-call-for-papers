import { ChangeEvent, useState } from "react";
import { InputText } from "../../stories/Input/InputText";
import { TextArea } from "../../stories/TextArea/TextArea";
import { InputFile } from "../../stories/InputFile/InputFile";
import { AccordionDefault } from "../../stories/Accordion/Accordion";

const Create = () => {
  const [data, setData] = useState({
    EventName: "",
    OrganizationName: "",
    Themes: "",
    Description: "",
  });
  const [dataError, setDataError] = useState({
    EventName: "",
    OrganizationName: "",
    Themes: "",
    Description: "",
  });

  const handleValidation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ0-9\s]+$/g);
    const validation = regex.test(e.target.value);

    if (
      ["OrganizationName", "EventName", "Description"].includes(
        e.currentTarget.name
      )
    ) {
      setData({ ...data, [e.currentTarget.name]: e.target.value });
      if (!validation) {
        setDataError({
          ...dataError,
          [e.currentTarget.name]:
            "Este campo solo puede tener letras y numeros",
        });
      } else {
        setDataError({ ...dataError, [e.currentTarget.name]: "" });
      }
    }
  };

  return (
    <form className="mx-auto w-full lg:max-w-xl bg-white">
      <AccordionDefault title="Datos Generales">
              <InputText
                label="Nombre de la organización (*)"
                placeholder="Ingrese el nombre de la organización"
                idValue="OrganizationName"
                value={data.OrganizationName}
                onChange={handleValidation}
                error={dataError.OrganizationName}
                maxLength={50}
                description="Máximo 50 caracteres"
                required
              />

              <InputText
                label="Nombre del evento (*)"
                placeholder="Ingrese el nombre del evento"
                idValue="EventName"
                value={data.EventName}
                onChange={handleValidation}
                error={dataError.EventName}
                maxLength={50}
                description="Máximo 50 caracteres"
                required
              />

              {/* Agregar componente para los temas */}

              <InputText
                label="Temas (*)"
                placeholder="Ingrese hasta 5 temas"
                idValue="Themes"
                value={data.Themes}
                onChange={handleValidation}
                required
              />

              <TextArea
                label="Descripción (*)"
                value={data.Description}
                placeholder="El evento se trata de..."
                idValue="Description"
                isLabelVisible={true}
                onChange={handleValidation}
                error={dataError.Description}
                maxLength={280}
                description="Máximo 280 caracteres"
                required
              />

              <InputFile
                label="Banner del evento"
                placeholder="Cargar imagen"
              />
       </AccordionDefault>
    </form>
  );
};

export default Create;
