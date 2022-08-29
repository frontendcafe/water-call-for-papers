import { useContext } from "react";
import { TabsContext } from "../TabsContext/TabsContext";

// hook para comprobar si un componente niño es llamado correctamente dentro
// de su componente padre
// <TabsList> <Tab>
// <TabsPanels> <TabsPanel>

export function useTabsContext(
  childComponentName: string,
  parentComponentName: string,
  componenteName: string
) {
  const context = useContext(TabsContext);
  if (componenteName === "tab" && !context.ListParent) {
    throw new Error(
      `${childComponentName} is missing a parent ${parentComponentName} component. `
    );
  }

  if (componenteName === "panel" && !context.PanelsParent) {
    throw new Error(
      `${childComponentName} is missing a parent ${parentComponentName} component. `
    );
  }

  return context;
}
