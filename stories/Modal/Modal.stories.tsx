import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button backgroundColor="bg-blue-500" onClick={() => setIsOpen(true)} label="Activar Modal" />
      <Modal open={isOpen} setIsOpen={setIsOpen}>
        <h1>Hola mundo</h1>
      </Modal>
    </>
  );
};

export const ModalDefault = Template.bind({});
