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

    if (e.currentTarget.name == "OrganizationName") {
      setData({ ...data, OrganizationName: e.target.value });
      if (e.target.value.length == 0) {
        setDataError({
          ...dataError,
          OrganizationName: "Este campo no puede estar vacio",
        });
      } else if (e.target.value.length > 50) {
        setDataError({
          ...dataError,
          OrganizationName: "Este campo no puede tener mas de 50 caracteres",
        });
      } else if (!validation) {
        setDataError({
          ...dataError,
          OrganizationName: "Este campo solo puede tener letras y numeros",
        });
      } else {
        setDataError({ ...dataError, OrganizationName: "" });
      }
    } else if (e.currentTarget.name == "EventName") {
      setData({ ...data, EventName: e.target.value });
      if (e.target.value.length == 0) {
        setDataError({
          ...dataError,
          EventName: "Este campo no puede estar vacio",
        });
      } else if (e.target.value.length > 50) {
        setDataError({
          ...dataError,
          EventName: "Este campo no puede tener mas de 50 caracteres",
        });
      } else if (!validation) {
        setDataError({
          ...dataError,
          EventName: "Este campo solo puede tener letras y numeros",
        });
      } else {
        setDataError({ ...dataError, EventName: "" });
      }
    } else if (e.currentTarget.name == "Description") {
      setData({ ...data, Description: e.target.value });
      if (e.target.value.length == 0) {
        setDataError({
          ...dataError,
          Description: "Este campo no puede estar vacio",
        });
      } else if (e.target.value.length > 280) {
        setDataError({
          ...dataError,
          Description: "Este campo no puede tener mas de 280 caracteres",
        });
      } else if (!validation) {
        setDataError({
          ...dataError,
          Description: "Este campo solo puede tener letras y numeros",
        });
      } else {
        setDataError({ ...dataError, Description: "" });
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
              />

              <InputText
                label="Nombre del evento (*)"
                placeholder="Ingrese el nombre del evento"
                idValue="EventName"
                value={data.EventName}
                onChange={handleValidation}
                error={dataError.EventName}
              />

              <InputText
                label="Temas (*)"
                placeholder="Ingrese hasta 5 temas"
                idValue="Themes"
                value={data.Themes}
                onChange={handleValidation}
              />

              <TextArea
                label="Descripción (*)"
                value={data.Description}
                placeholder="El evento se trata de..."
                idValue="Description"
                isLabelVisible={true}
                onChange={handleValidation}
                error={dataError.Description}
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
