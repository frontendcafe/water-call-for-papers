import { Tab } from "@headlessui/react";

export const Tabs = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Todos</Tab>
        <Tab>En Curso</Tab>
        <Tab>Guardados</Tab>
        <Tab>Finalizados</Tab>
      </Tab.List>
    </Tab.Group>
  );
};
