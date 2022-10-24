import React, { ComponentType } from "react";
import { Tab } from "@headlessui/react";

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
    disabled: false,
  },
];

const charlas = [
  {
    type: "Todas",
  },
  {
    type: "En revision",
  },
  {
    type: "Aprobadas",
  },
  {
    type: "Desestimadas",
  },
];

//Surgió este error de tipo
//Type '(<TTag extends ElementType<any> =
//"button">(props: Props<TTag, TabRenderPropArg, TabPropsWeControl>, ref: Ref<HTMLElement>)
// => ReactElement<...>) & { ...; } & { ...; }' does not satisfy the constraint
// 'keyof IntrinsicElements | JSXElementConstructor<any>'. Type
// '(<TTag extends ElementType<any> = "button">(props: Props<TTag, TabRenderPropArg, TabPropsWeControl>,
//  ref: Ref<HTMLElement>) => ReactElement<...>) & { ...; } & { ...; }'
//  is not assignable to type '(props: any) => ReactElement<any, any>'.

// al utilizar ComponentMeta<typeof ButtonTabs>
// esto ocurre solo con storybook

// esto solucionó el problema
// https://github.com/tailwindlabs/headlessui/issues/1394

type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

export default {
  title: "TabsGroup/Tabs",
  component: Tab,
} as ExtractProps<typeof Tab>;

export const TabsHistory: ExtractProps<typeof Tab> = () => (
  <Tab.Group>
    <Tab.List className="flex space-x-1">
      {data.map(({ type, disabled }) => (
        <Tab
          key={type}
          className={({ selected }) =>
            `
            py-2 px-4
            focus:outline-none focus:ring focus:ring-cyan-400
          ${
            selected
              ? "border-b-4 border-cyan-700"
              : "text-blue-300 hover:bg-cyan-400 hover:text-white"
          }
          `
          }
          disabled={disabled}
        >
          {type}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels className="mt-4">
      <Tab.Panel>Todas Cards</Tab.Panel>
      <Tab.Panel>En Curso Cards</Tab.Panel>
      <Tab.Panel>
        <table>
          <thead>
            <tr>
              <td>Título</td>
              <td>Tema</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content 1</td>
              <td>Content 2</td>
            </tr>
          </tbody>
        </table>
      </Tab.Panel>
      <Tab.Panel>
        <Tab.Group>
          <Tab.List>
            {charlas.map(({ type }) => (
              <Tab
                key={type}
                className={({ selected }) =>
                  `
            py-2 px-4
            focus:outline-none focus:ring focus:ring-cyan-400
          ${
            selected
              ? "border-b-4 border-cyan-700"
              : "text-blue-300 hover:bg-cyan-400 hover:text-white"
          }
          `
                }
              >
                {type}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Todas las postulaciones</Tab.Panel>
            <Tab.Panel>Postulaciones en revision</Tab.Panel>
            <Tab.Panel>Postulaciones Aprobadas</Tab.Panel>
            <Tab.Panel>Postulaciones Desestimadas</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Tab.Panel>
    </Tab.Panels>
  </Tab.Group>
);
