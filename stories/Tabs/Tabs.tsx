import { Tab } from "@headlessui/react";

interface TabsProps {
  selected: boolean;
}

export const Tabs = ({ selected }: TabsProps) => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>
          <button
            className={
              selected ? "border-b-4 border-cyan-700" : "text-sky-400/25"
            }
          >
            Todos
          </button>
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
};
