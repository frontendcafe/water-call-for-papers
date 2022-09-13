import { Disclosure } from "@headlessui/react";
import { Icon } from "../Icon/Icon";
import { InputText } from "../Input/InputText";
import { TextArea } from "../TextArea/TextArea";
import { InputFile } from "../InputFile/InputFile";
import { ChangeEvent, useState } from "react";

export const GeneratedData = () => {
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
    <div className="mx-auto w-full lg:max-w-xl bg-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#B2B7FF] px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-xl">Datos Generales</span>
              {open ? (
                <Icon iconName="chevronUp" />
              ) : (
                <Icon iconName="chevronDown" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="pt-2 pb-2 flex flex-col gap-2">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
