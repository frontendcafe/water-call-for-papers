import { useContext } from "react";
import { TabsContext } from "../TabsContext/TabsContext";

// hook para comprobar si un componente niño es llamado correctamente dentro
// de su componente padre
// <TabsList> <Tab>
// <TabsPanels> <TabsPanel>

export function useTabsContext(
  childComponentName: string,
  parentComponentName: string
) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      `${childComponentName} is missing a parent ${parentComponentName} component. `
    );
  }
  return context;
}
