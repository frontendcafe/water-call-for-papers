import { createContext } from "react";

interface ContextType {
  ListParent?: boolean;
  PanelsParent?: boolean;
}

export const TabsContext = createContext<ContextType>({} as ContextType);
