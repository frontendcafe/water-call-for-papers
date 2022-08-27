import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabsGroup } from "./TabsGroup";
import { TabsList } from "./TabsList";
import { Tab } from "./Tab";
import { TabsPanels } from "./TabsPanels";
import { TabsPanel } from "./TabsPanel";

const data = [
  {
    type: "Todas",
    disabled: false,
  },
  {
    type: "En Curso",
    disabled: false,
  },
  {
    type: "Tabla",
    disabled: false,
  },
  {
    type: "Postulaciones",
    disabled: true,
  },
];

const charlas = [
  {
    type: "Todas",
    disabled: false,
  },
  {
    type: "En revision",
    disabled: false,
  },
  {
    type: "Aprobadas",
    disabled: false,
  },
  {
    type: "Desestimadas",
    disabled: true,
  },
];

export default {
  title: "TabsGroup/Tabs",
  component: TabsGroup,
  decorators: [
    (Story) => (
      //simular el estilo del body de la app
      <div className="bg-slate-100 p-3">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TabsGroup>;

export const TabsHistory: ComponentStory<typeof TabsGroup> = () => (
  <TabsGroup>
    <TabsList>
      {data.map(({ type, disabled }) => (
        <Tab key={type} disabled={disabled}>
          {type}
        </Tab>
      ))}
    </TabsList>
    <TabsPanels>
      <TabsPanel>Todas</TabsPanel>
      <TabsPanel>En curso</TabsPanel>
      <TabsPanel>
        <TabsGroup>
          <TabsList>
            {charlas.map(({ type, disabled }) => (
              <Tab key={type} disabled={disabled}>
                {type}
              </Tab>
            ))}
          </TabsList>
          <TabsPanels>
            <TabsPanel>Todas deep</TabsPanel>
            <TabsPanel>En revision deep</TabsPanel>
            <TabsPanel>Aprobadas deep</TabsPanel>
            <TabsPanel>Desestimadas deep</TabsPanel>
          </TabsPanels>
        </TabsGroup>
      </TabsPanel>
      <TabsPanel>Postulaciones</TabsPanel>
    </TabsPanels>
  </TabsGroup>
);
