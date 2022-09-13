import { useReducer } from "react";

interface SidebarState {
  ariaExpanded: boolean;
  ariaLabel: string;
  isOpen: boolean;
}
interface DispatchAction {
  type: Action;
}
export enum Action {
  DESKTOP = "DESKTOP",
  DESKTOP_INITIAL = "DESKTOP_INITIAL",
  MOBILE = "MOBILE",
  MOBILE_INITIAL = "MOBILE_INITIAL",
}
enum AriaLabel {
  COMPACT = "Compactar sidebar",
  EXPAND = "Expandir sidebar",
  CLOSE = "Cerrar menu",
  OPEN = "Abrir menu",
}

const sidebarStateCalculator = (
  state: SidebarState,
  { type }: DispatchAction
) => {
  const { isOpen } = state;

  switch (type) {
    case Action.DESKTOP:
      return {
        ariaExpanded: !isOpen,
        ariaLabel: !isOpen ? AriaLabel.COMPACT : AriaLabel.EXPAND,
        isOpen: !isOpen,
      };
    case Action.DESKTOP_INITIAL:
      return {
        ...state,
        ariaLabel: isOpen ? AriaLabel.COMPACT : AriaLabel.EXPAND,
      };
    case Action.MOBILE:
      return {
        ariaExpanded: isOpen,
        ariaLabel: isOpen ? AriaLabel.CLOSE : AriaLabel.OPEN,
        isOpen: !isOpen,
      };
    case Action.MOBILE_INITIAL:
      return {
        ...state,
        ariaExpanded: !isOpen,
        ariaLabel: !isOpen ? AriaLabel.CLOSE : AriaLabel.OPEN,
      };

    default:
      return state;
  }
};

export const useSidebarReducer = () => {
  const [sidebarState, setSidebarState] = useReducer(sidebarStateCalculator, {
    ariaExpanded: true,
    ariaLabel: "",
    isOpen: true,
  });

  return { sidebarState, setSidebarState };
};
