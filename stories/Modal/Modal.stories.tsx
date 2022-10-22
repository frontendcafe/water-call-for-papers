import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";
import { TextArea } from "../TextArea/TextArea";
import { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Activar Modal
      </Button>
      <Modal {...args} open={isOpen} setIsOpen={setIsOpen}>
        {args.children}
      </Modal>
    </>
  );
};

export const ModalEliminarEvento = Template.bind({});

ModalEliminarEvento.args = {
  size: "medium",
  children: (
    <>
      <h2 className="text-left font-semibold text-xl text-gray-800">
        ¿Desea eliminar el evento?
      </h2>
      <p className="text-sm text-left text-gray-600">
        Si eleminas el evento no podrás recuperarlo más adelante.
      </p>
      <div className="flex justify-end gap-3">
        <Button onClick={() => null} variant="secondary">
          Cancelar
        </Button>
        <Button onClick={() => null} variant="primary">
          Eliminar
        </Button>
      </div>
    </>
  ),
};

export const ModalPostulacionEnviada = Template.bind({});

ModalPostulacionEnviada.args = {
  size: "medium",
  children: (
    <>
      <svg
        className="h-9 w-9 m-auto mt-4 stroke-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-left font-semibold text-xl text-gray-800">
        ¡Postulación enviada!
      </h2>
      <p className="text-sm text-left text-gray-600">
        ¡Muchas gracias por tu interés en participar! Puedes seguir el estado de
        tu postulación a través del código que te enviamos por mail.
      </p>
      <div className="flex justify-end">
        <Button onClick={() => null} variant="primary">
          Ver detalle
        </Button>
      </div>
    </>
  ),
};

export const ModalNotificar = Template.bind({});

ModalNotificar.args = {
  size: "large",
  children: (
    <>
      <h2 className="text-left font-semibold text-xl text-gray-800">
        Notificar
      </h2>
      <div>
        <p className="mb-1 text-base text-left text-gray-800">
          Mensaje para el disertante
        </p>
        <TextArea
          label="Mensaje para el disertante"
          rows={7}
          idValue="notification"
          value="Hola, [nombre speaker]!
          Tu propuesta [nombre propuesta] ha sido desestimada. Lo sentimos, recibimos gran cantidad de postulaciones y, en esta ocasión, decidimos elegir otras propuestas.
          Sin embargo, te invitamos a participar como oyente del evento. En breve te compartiremos el cronograma. 
          Te esperamos!"
        />
      </div>

      <p className="text-left text-indigo-600 text-sm">
        Escribe el nombre del postulante y de la propuesta entre corchetes [ ]
        para que se completen automáticamente de acuerdo a la propuesta.
      </p>

      <div className="flex justify-end">
        <Button onClick={() => null} variant="primary">
          Enviar notificación
        </Button>
      </div>
    </>
  ),
};
