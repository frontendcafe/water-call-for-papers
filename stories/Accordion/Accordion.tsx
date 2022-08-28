import React from "react";
import { Disclosure } from "@headlessui/react";
import { InputText } from "../Input/InputText";
import { InputFile } from "../InputFile/InputFile";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";

interface Accordion {
  /**
   * Accordion Name.
   */
  title: String;
}

export const AccordionDefault = ({ title }: Accordion) => {
  const onSave = () => {};

  const onCreate = () => {};

  return (
    <div className="flex flex-col gap-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full py-2 rounded-md bg-gray-400 text-gray-600 text-left font-bold hover:bg-gray-200 focus:border-gray-400 focus:border-2">
              <span className="ml-3">{title}</span>
            </Disclosure.Button>
            {!open && (
              <div>
                <Disclosure.Panel
                  className="flex flex-col space-y-4 pt-2"
                  static
                >
                  <InputText
                    label="Nombre de la organización"
                    idValue="TagName"
                    placeholder="Nombre de la organización"
                  />
                  <InputText
                    label="Nombre del evento (*)"
                    idValue="TagName"
                    placeholder="Nombre del evento"
                  />
                  <InputText
                    label="Tema"
                    description="Indicá cuáles son los temas que te gustaría que se traten en tu evento"
                    idValue="TagName"
                    placeholder="Escribe un tema"
                  />
                  <TextArea
                    label="Descripción (*)"
                    value="Textarea"
                    idValue="Textarea"
                    maxLength={280}
                  />
                  <InputFile
                    label="Banner del evento"
                    placeholder="Cargar imagen"
                  />
                </Disclosure.Panel>
              </div>
            )}
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        <Disclosure.Button className="w-full py-2 rounded-md bg-gray-400 text-gray-600 text-left font-bold">
          <span className="ml-3">Fecha y localiación</span>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          Yes! You can purchase a license that you can share with your entire
          team.
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        <Disclosure.Button className="w-full py-2 rounded-md bg-gray-400 text-gray-600 text-left font-bold">
          <span className="ml-3">Convocatoria postulantes</span>
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          Yes! You can purchase a license that you can share with your entire
          team.
        </Disclosure.Panel>
      </Disclosure>

      <div className="flex gap-4 justify-center w-full mt-2">
        <Button
          children="Guardar Borrador"
          size="stretched"
          variant="secondary"
          onClick={onSave}
        />
        <Button children="Crear Evento" size="stretched" onClick={onCreate} />
      </div>
    </div>
  );
};
